from django.contrib.auth import get_user_model
from django.core.mail import send_mail
from registration.models import Registration
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

User = get_user_model()


# Create your views here.

class ValidateRegistration(APIView):
    permission_classes = [AllowAny]

    def post(self, request):

        # retrieve the email input at registration and handle missing email address
        email = request.data.get('email')

        # handling if no email is provided
        if not email:
            return Response({'error': 'Email is required.'}, status=status.HTTP_400_BAD_REQUEST)

        try:

            # check if user already exists
            user = User.objects.get(email=email)

            # check if registration entry
            registration_entry = Registration.objects.get(user=user)

            # logic for handling when registration is already validated
            if registration_entry.is_validated:
                return Response({'message': 'This email is already registered.'}, status=status.HTTP_200_OK)
            else:
                # sending registration email with validation_code
                validation_code = registration_entry.validation_code
                send_mail(
                    'Welcome to Motion',
                    f'Almost done. Please finish your registration with the validation code ${validation_code}.',
                    'hello.motion.0125@gmail.com',
                    [email],
                    fail_silently=False,
                )
                return Response({'message': 'Validation email sent.'}, status=status.HTTP_200_OK)

        except User.DoesNotExist:
            # If the user doesn't exist, create a new user and registration entry
            user = User.objects.create(email=email, username=email)
            user.save()  # Trigger post_save signal for the user creation

            # Create a registration entry for the user
            registration_entry, _ = Registration.objects.get_or_create(user=user)
            validation_code = registration_entry.validation_code

            send_mail(
                'Welcome to Motion',
                f'Almost done. Please finish your registration with the validation code {validation_code}.',
                'hello.motion.0125@gmail.com',
                [email],
                fail_silently=False,
            )
            return Response({'message': 'Validation email sent.'}, status=status.HTTP_200_OK)


# validation of the registration with validation_code
@api_view(['POST'])
@permission_classes([AllowAny])
def validate_email(request):
    email = request.data.get('email')
    validation_code = request.data.get('validation_code')

    try:
        # retrieve user from user model with email
        user = User.objects.get(email=email)

        # retrieve the matching registration entry
        registration_entry = Registration.objects.get(user=user)

        # logic for comparing the validation code
        if str(registration_entry.validation_code) == validation_code:
            registration_entry.is_validated = True
            registration_entry.save()
            return Response({'message': 'Welcome to Motion! Your Registration was successful.'})
        else:
            return Response({'error': 'The provided code is invalid.'}, status=status.HTTP_400_BAD_REQUEST)

    # handling error when user instance does not exist
    except User.DoesNotExist:
        return Response({'error': 'No User found.'}, status=status.HTTP_404_NOT_FOUND)

    # handling error when registration instance does not exist
    except Registration.DoesNotExist:
        return Response({'error': 'No registration entry found for this user.'}, status=status.HTTP_404_NOT_FOUND)
