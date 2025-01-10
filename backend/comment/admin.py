from django.contrib import admin

from comment.models import Comment

# Register your models here.
class CommentAdmin(admin.ModelAdmin):
    list_display = ['id','comment_created','comment_content']
admin.site.register(Comment, CommentAdmin)