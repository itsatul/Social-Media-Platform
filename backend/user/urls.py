from django.urls import path

from user.views import ListCreateUserView, RetrieveUpdateDeleteUserView, RetrieveUpdateDeleteActiveUserView

urlpatterns = [
    path('me/', RetrieveUpdateDeleteActiveUserView.as_view(), name='user'),
    path('', ListCreateUserView.as_view()),
    path('<int:pk>/', RetrieveUpdateDeleteUserView.as_view())
]
