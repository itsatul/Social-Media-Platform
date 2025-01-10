from django.contrib.auth import get_user_model
from rest_framework import serializers

from .models import Registration

User = get_user_model()


class RegistrationSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField()

    class Meta:
        model: Registration
        fields = ['user', 'is_validated', 'created_at']
