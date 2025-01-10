from django.contrib.auth import get_user_model
from django.db import models
User = get_user_model()
import uuid


# Create your models here.
class Registration(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='registration')
    validation_code = models.UUIDField(default=uuid.uuid4, editable=False)
    is_validated = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Registration for {self.user.username}"
