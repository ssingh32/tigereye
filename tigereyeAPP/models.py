from django.db import models

# Create your models here.

class Events(models.Model):
    start_time = models.DateTimeField
    end_time = models.DateTimeField
    location = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    category = models.CharField(max_length=100)
    event_image = models.CharField(max_length=1000)

