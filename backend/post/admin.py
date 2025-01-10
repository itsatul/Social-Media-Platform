from django.contrib import admin

from post.models import Post


# Register your models here.

class PostAdmin(admin.ModelAdmin):
    list_display = ['id', 'text_content', 'user']
    search_fields = ['text_content']


admin.site.register(Post, PostAdmin)
