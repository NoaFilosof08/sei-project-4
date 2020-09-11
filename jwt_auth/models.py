from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    email = models.CharField(max_length=50, unique=True)
    is_artist = models.BooleanField()
    profile_image = models.CharField(max_length=500)
    cover_image = models.CharField(max_length=500, blank=True)
    name = models.CharField(max_length=80)
    bio = models.CharField(max_length=500)
