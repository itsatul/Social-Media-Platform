from django.core.mail import send_mail
from registration.models import Registration
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView


# Create your views here.


class ValidateRegistration(APIView):
    def post(self, request):
        user = request.user
        validation_entry, created = Registration.objects.get_or_create(user=user)

        validation_code = validation_entry.validation_code

        send_mail(
            'Welcome to Motion',
            f'Almost done. Please finish your registration with the validation code ${validation_code}.',
            'hello.motion.0125@gmail.com',
            [user.email],
            fail_silently=False,
        )

        return Response({'message': 'Validation email sent.'}, status=status.HTTP_200_OK)


@api_view(['POST'])
def validate_email(request):
    user = request.user
    validation_code = request.data.get('validation_code')
    try:
        validation_entry = ValidateRegistration.objects.get(user=user)
        if str(validation_entry.validation_code) == validation_code:
            validation_entry.is_validated = True
            validation_entry.save()
            return Response({'message': 'Email validated successfully.'})
        return Response({'error': 'Invalid code.'}, status=status.HTTP_400_BAD_REQUEST)
    except ValidateRegistration.DoesNotExist:
        return Response({'error': 'No validation code found.'}, status=status.HTTP_404_NOT_FOUND)
