from django.db import models
from datetime import datetime
# Create your models here.

class Events(models.Model):
    start_time = models.DateTimeField(default=datetime.now)
    end_time = models.DateTimeField(default=datetime.now)
    location = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    category = models.CharField(max_length=100)
    event_image = models.CharField(max_length=1000)

    def __str__(self):
        return self.name + ' at ' + self.location

    class Meta:
        verbose_name_plural = 'events'

class SocialAreas(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    open_time = models.DateTimeField(default=datetime.now)
    close_time = models.DateTimeField(default=datetime.now)
    description = models.CharField(max_length=500)
    area_image = models.CharField(max_length=1000)

    def __str__(self):
        return self.name + ' at ' + self.location

    class Meta:
        verbose_name_plural = 'social Areas'