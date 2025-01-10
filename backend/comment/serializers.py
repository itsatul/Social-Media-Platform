from rest_framework import serializers

from comment.models import Comment


# jon test
class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'comment_created', 'comment_content']
