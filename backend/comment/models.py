from django.db import models

# Create your models here.
class Comment(models.Model):

    comment_content = models.TextField()
    comment_created = models.DateTimeField(auto_now_add=True)
    def _str_(self):
        return f'{self.id} was created : {self.comment_created}'