from django.db import models


# Create your models here.
class FriendRequest(models.Model):
    friend_request_status = models.BooleanField(blank=False, default=False)
    friend_request_created = models.DateTimeField(auto_now_add=True)

    def _str_(self):
        return f'{self.id} is : {self.friend_request_status}'
