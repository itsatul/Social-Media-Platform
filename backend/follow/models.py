from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()
# Create your models here.
class Follow(models.Model):
    # the User that the active User is following
    following = models.ForeignKey(User, on_delete=models.CASCADE, related_name='following')

    # the User that is following the active User
    follower = models.ForeignKey(User, on_delete=models.CASCADE, related_name='followers')

    followed_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('following', 'follower')  # Ensures each user can only follow another once

    def __str__(self):
        return f"{self.follower} follows {self.following}"