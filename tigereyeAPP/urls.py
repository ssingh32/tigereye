from django.conf.urls import url
from . import views

    # /events/
urlpatterns = [
    url(r'^$', views.index, name='index'),

    # /events/eventdetails/
    url(r'^(?P<events_id>[0-9]+)/$', views.detail, name = 'detail'),
]

