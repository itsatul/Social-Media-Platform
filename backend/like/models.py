from django.contrib.auth import get_user_model
from django.db import models

from post.models import Post

User = get_user_model()


# Create your models here.
class Like(models.Model):
    user = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name='likes')
    post = models.ForeignKey(to=Post, on_delete=models.CASCADE, related_name='likes')
    like_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} liked {self.post.text_content}"