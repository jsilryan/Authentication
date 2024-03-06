from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model

# Retrieving a custom user model
User = get_user_model()

class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'email', 'name', 'password')