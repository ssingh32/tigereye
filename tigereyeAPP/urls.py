from django.conf.urls import url
from . import views

app_name = 'tigereyeAPP'

    # /events/
urlpatterns = [
    url(r'^$', views.index, name='index'),

    # /events/eventdetails/ OR /events/<event_id>
    url(r'^(?P<events_id>[0-9]+)/$', views.detail, name = 'detail'),
]

