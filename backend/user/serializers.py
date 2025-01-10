from django.contrib.auth import get_user_model
from rest_framework import serializers
User = get_user_model()
from follow.models import Follow


class FollowSerializer(serializers.ModelSerializer):
    # accessing username of user being followed
    following_username = serializers.CharField(source='following.username')
    follower_username = serializers.CharField(source='follower.username')

    class Meta:
        model = Follow
        fields = ['following_username', 'follower_username']


class UserSerializer(serializers.ModelSerializer):
    """
    follow = FollowSerializer()
    Will not work as following and follower in Follow model are ForeignKey relationships which are handled with
    a RelatedManager object (also with ManyToMany and OneToOne relationships
    """

    following_relationships = serializers.SerializerMethodField()
    follower_relationships = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'phone_number', 'location', 'about',
                  'created_at', 'is_active', 'following_relationships', 'follower_relationships']
        # fields = ['username', 'email', 'phone_number', 'location', 'about', 'created_at']

    def get_following_relationships(self, obj):
        # follows user -> query with user from Follow table where follower is the active User
        follows = Follow.objects.filter(follower=obj)
        return FollowSerializer(follows, many=True).data

    def get_follower_relationships(self, obj):
        follower = Follow.objects.filter(following=obj)
        return FollowSerializer(follower, many=True).data
