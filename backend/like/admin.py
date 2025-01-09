from django.contrib import admin

from like.models import Like


# Register your models here.
class LikeAdmin(admin.ModelAdmin):
    list_display = ['id', 'post', 'user']


admin.site.register(Like, LikeAdmin)
