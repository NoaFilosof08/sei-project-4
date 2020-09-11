from django.db import models

class Art(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    price = models.IntegerField()
    image = models.CharField(max_length=200)
    owner = models.ForeignKey(
        'jwt_auth.User',
        related_name="created_art",
        on_delete=models.CASCADE
    )

    def __str__(self):
        return f'{self.name} - {self.price}'
