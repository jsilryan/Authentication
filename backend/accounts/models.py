from django.db import models
from django.contrib.auth.models import AbstractUser, PermissionsMixin, BaseUserManager

# Create your models here.
class UserAccountManager(BaseUserManager):
    def create_user(self, email, name, password=None): # Django won't allow me to create a user if my password is none
        if not email:
            raise ValueError('Users must have an email address!')
        
        email = self.normalize_email(email) # Turns everything to lowercase
        user = self.model(email = email, name = name)

        user.set_password(password) # Hash the password
        user.save()

        return user

class UserAccount(AbstractUser, PermissionsMixin):
    # Make sure the username has blank and null true to avoid errors
    username = models.CharField(
        max_length=150,
        unique=True,
        blank=True, 
        null=True
    )

    email = models.EmailField(unique=True, blank=True, null=True)
    name = models.CharField(max_length = 255)
    is_active = models.BooleanField(default = True)
    is_staff = models.BooleanField(default = False)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    def get_full_name(self):
        return self.name
    
    def get_short_name(self) -> str:
        return self.name
    
    def __str__(self):
        return self.email