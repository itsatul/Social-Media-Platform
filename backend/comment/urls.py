from django.urls import path

from comment.views import ListCreateCommentView, RetrieveUpdateDeleteCommentView

urlpatterns = [path('', ListCreateCommentView.as_view()),
               path('<int:pk>/', RetrieveUpdateDeleteCommentView.as_view()),
               ]
