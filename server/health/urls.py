"""
URL configuration for health project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
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
from django.contrib import admin
from django.urls import path
from health import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path("api/admin/", admin.site.urls),
    path('api/habits/', views.habit_list),
    path('api/habits/<int:id>', views.habit_detail),
    path('api/one-habits/', views.one_habit_list),
    path('api/one-habits/<int:id>', views.one_habit_detail),
    path('api/users/', views.user_list),
    path('api/users/<int:id>', views.user_detail),
]

urlpatterns = format_suffix_patterns(urlpatterns)
