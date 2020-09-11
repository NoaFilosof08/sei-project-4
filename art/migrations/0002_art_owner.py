# Generated by Django 3.1.1 on 2020-09-11 16:28

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('art', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='art',
            name='owner',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='created_art', to=settings.AUTH_USER_MODEL),
        ),
    ]