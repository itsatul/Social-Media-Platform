from django.contrib.auth import get_user_model
from django.db.models import Q
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.response import Response

from post.models import Post
from post.serializers import PostSerializer

User = get_user_model()


# Create your views here.
class ListCreatePostView(ListCreateAPIView):
    def get_queryset(self):
        user_id = self.kwargs.get('pk')
        search_string = self.request.GET.get('search')

        queryset = Post.objects.all()

        if user_id is not None:
            queryset = queryset.filter(user__id=user_id)

        if search_string:
            queryset = queryset.filter(
                Q(text_content__icontains=search_string)
            )

        return queryset.order_by('-post_created')

    serializer_class = PostSerializer

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class RetrieveUpdateDestroyPostView(RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
