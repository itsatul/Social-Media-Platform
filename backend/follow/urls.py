from django.urls import path, include

from follow.views import FollowUserView, FollowerView, FollowingView

urlpatterns = [
    path('followers/', include([

        # toggle follow/unfollow a user
        path('toggle-follow/<int:user_id>/', FollowUserView.as_view(), name='follow_user'),

        # list of all followers
        path('followers/', FollowerView.as_view()),

        # list people the user is following
        path('following/', FollowingView.as_view()),
    ]))
]
