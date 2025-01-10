from rest_framework import serializers

from friend_request.models import FriendRequest


# Create your views here.

class FriendRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = FriendRequest
        fields = ['id', 'friend_request_status', 'friend_request_created']
