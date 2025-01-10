from django.contrib import admin

from friend_request.models import FriendRequest


# Register your models here.
class FriendRequestAdmin(admin.ModelAdmin):
    list_display = ['id', 'friend_request_status', 'friend_request_created']


admin.site.register(FriendRequest, FriendRequestAdmin)
