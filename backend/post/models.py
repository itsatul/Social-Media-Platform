from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


# Create your models here.
class Post(models.Model):
    text_content = models.TextField()
    # media_content = models.ImageField(upload_to='posts/', blank=True, null=True)
    media_content = models.TextField(blank=True, null=True)
    post_created = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(to=User, on_delete=models.PROTECT, related_name='posts')
    shared_post = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True, related_name='posts')

    def __str__(self):
        return f"Post by {self.user.username} on {self.post_created}"
