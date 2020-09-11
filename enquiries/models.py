from django.db import models

class Enquiry(models.Model):
    text = models.CharField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    art = models.ForeignKey(
        'art.Art',
        related_name='enquiries',
        on_delete=models.CASCADE
    )
    owner = models.ForeignKey(
        'jwt_auth.User',
        related_name='user',
        on_delete=models.CASCADE
    )

    def __str__(self):
        return f'Enquiry {self.text} - Art {self.art} - User {self.owner}'

