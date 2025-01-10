from rest_framework import serializers

from post.models import Post


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'user', 'text_content', 'media_content', 'shared_post']
        search_fields = ['text_content']
