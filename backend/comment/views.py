from django.shortcuts import render

from rest_framework import generics, status
from rest_framework.generics import GenericAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from sqlparse.tokens import Generic

from comment.models import Comment
from comment.serializers import CommentSerializer


# Create your views here.
class ListCreateCommentView(GenericAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    # get All the itmes
    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
    # post
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)

#Get only 1 item
class RetrieveUpdateDeleteCommentView(GenericAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    # class RetrieveUpdateDestroyCommentView(RetrieveUpdateDestroyAPIView):
    #     queryset = Comment.objects.all()
    #     serializer_class = CommentSerializer
    #     permission_classes = [IsAuthenticated]
    # get
    def get(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)
    # patch
    def patch(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    def delete(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
