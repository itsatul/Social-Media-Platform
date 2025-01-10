from django.urls import path

from friend_request.views import ListCreateFriendRequestView

urlpatterns = [path('',ListCreateFriendRequestView.as_view())

]