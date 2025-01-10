from rest_framework import serializers
from follow.models import Follow


class FollowSerializer(serializers.ModelSerializer):
    following_username = serializers.CharField(source='following.username')
    following_id = serializers.IntegerField(source='following.id')
    follower_username = serializers.CharField(source='follower.username')
    follower_id = serializers.IntegerField(source='follower.id')

    class Meta:
        model = Follow
        fields = ['follower_id', 'follower_username', 'following_id', 'following_username']


# unused
# class FollowerSerializer(serializers.ModelSerializer):
#     follower_username = serializers.CharField(source='follower.username')
#
#     class Meta:
#         model = Follow
#         fields = ['id', 'follower_username']

class FollowerSerializer(serializers.ModelSerializer):
    follower = serializers.SerializerMethodField()

    class Meta:
        model = Follow
        fields = ['follower']

    def get_follower(self, obj):
        return {
            'id': obj.follower.id,
            'username': obj.follower.username
        }

class FollowingSerializer(serializers.ModelSerializer):
    following = serializers.SerializerMethodField()

    class Meta:
        model = Follow
        fields = ['following']

    def get_following(self, obj):
        return {
            'id': obj.following.id,
            'username': obj.following.username,
        }