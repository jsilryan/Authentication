from django.urls import path
from .views import test_backend

urlpatterns = [
    path('test', test_backend)
]