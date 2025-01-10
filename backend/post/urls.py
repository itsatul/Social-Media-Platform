from django.urls import path

from post.views import ListCreatePostView, RetrieveUpdateDestroyPostView

urlpatterns = [
    path("", ListCreatePostView.as_view()),
    path("<int:pk>/", RetrieveUpdateDestroyPostView.as_view()),
    path("user/<int:pk>/", ListCreatePostView.as_view()),
]
