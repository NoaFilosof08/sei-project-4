from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    email = models.CharField(max_length=50, unique=True)
    is_artist = models.BooleanField(null=True)
    profile_image = models.CharField(max_length=500, blank=True)
    cover_image = models.CharField(max_length=500, blank=True)
    name = models.CharField(max_length=80, blank=True)
    bio = models.CharField(max_length=500,blank=True)
