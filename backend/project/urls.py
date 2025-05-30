"""
URL configuration for project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt import views as jwt_views

from project import settings

urlpatterns = [
    # TIARAS
    path('backend/admin/', admin.site.urls),

    path('backend/api/', include([

        path('auth/', include([
            path('token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
            path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
            path('token/verify/', jwt_views.TokenVerifyView.as_view(), name='token_verify'),
        ])),

        path('auth/', include('registration.urls')),

        path('users/', include('user.urls')),

        path('social/', include('follow.urls')),

        path('social/posts/', include('post.urls')),
    ])),

    # JONS
    path('backend/comment/', include('comment.urls')),
    path('backend/friend_request/', include('friend_request.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_URL)
