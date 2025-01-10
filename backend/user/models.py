from django.contrib.auth.models import AbstractUser
from django.core.exceptions import ValidationError
from django.core.validators import FileExtensionValidator
from django.db import models

def validate_image_size(image):
    max_size = 2 * 1024 * 1024  # 2 MB
    if image.size > max_size:
        raise ValidationError("The maximum file size that can be uploaded is 2MB.")

# Create your models here.
class User(AbstractUser):
    email = models.EmailField(unique=True, max_length=254)
    phone_number = models.CharField(max_length=18, blank=True, null=True)
    location = models.CharField(max_length=80, blank=True, null=True)
    about = models.TextField(max_length=2200, blank=True, null=True)
    # interests
    # profile_image = models.ImageField(
    #     upload_to="profile_images/",
    #     blank=True,
    #     null=True,
    #     validators=[FileExtensionValidator(['jpg', 'jpeg', 'png']),
    #                 validate_image_size
    #     ]
    # )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.username
