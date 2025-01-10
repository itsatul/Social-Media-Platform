from django.urls import path

from .views import ValidateRegistration, validate_email

urlpatterns = [
    path('registration/', ValidateRegistration.as_view(), name='user'),
    path('registration/validation/', validate_email, name='validate-email'),
]
