from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    email = models.CharField(max_length=50, unique=True)
    is_artist = models.BooleanField(null=True)
    profile_image = models.CharField(max_length=500, blank=True)
    cover_image = models.CharField(max_length=500, blank=True)
    name = models.CharField(max_length=80, blank=True)
    bio = models.CharField(max_length=500,blank=True)
    types = models.ManyToManyField(
        'artist_types.Type',
        related_name='users',
        blank=True
    )
    favourites = models.ManyToManyField(
        'jwt_auth.User',
        related_name="favourite",
        blank=True
    )
    date_joined = models.CharField(max_length=100, blank=True)

