from django.contrib import admin
from . models import Events
from . models import SocialAreas
from . models import User

# Register your models here.
admin.site.register(Events)
admin.site.register(SocialAreas)
admin.site.register(User)
