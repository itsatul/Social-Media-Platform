from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
from follow.models import Follow
from follow.serializers import FollowerSerializer, FollowingSerializer
from rest_framework import status
from rest_framework.generics import ListCreateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

User = get_user_model()


# Create your views here.

# unused
# class ListCreateFollowView(ListCreateAPIView):
#     queryset = Follow.objects.all()
#     serializer_class = FollowSerializer
#
#     def get_permissions(self):
#         if self.request.method in SAFE_METHODS:
#             return [AllowAny()]
#         return [IsAdminUser()]


# Logic for toggling follow/unfollow User
class FollowUserView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, user_id):
        user_to_follow = get_object_or_404(User, id=user_id)

        # check if follow relationship already exists between authenticated user and user to be followed
        existing_follow = Follow.objects.filter(follower=request.user, following=user_to_follow).first()

        if existing_follow:
            existing_follow.delete()
            return Response({'message': f'You unfollowed {user_to_follow.username}'}, status=status.HTTP_204_NO_CONTENT)
        else:
            Follow.objects.create(follower=request.user, following=user_to_follow)
            return Response({'message': f'You followed {user_to_follow.username}'}, status=status.HTTP_201_CREATED)


# /followers/followers/ endpoint, get all followers of the active user
class FollowerView(ListCreateAPIView):
    queryset = Follow.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = FollowerSerializer

    def get_queryset(self):
        # get all objects from Follow where the current user is 'following'
        followers = Follow.objects.filter(following=self.request.user)
        print(followers)
        return followers


# /followers/following/ endpoint, get all following of the active user
class FollowingView(ListCreateAPIView):
    queryset = Follow.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = FollowingSerializer

    def get_queryset(self):
        following = Follow.objects.filter(follower=self.request.user)
        return following
