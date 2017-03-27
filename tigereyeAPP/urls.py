from django.conf.urls import url
from . import views

app_name = 'tigereyeAPP'

    # /events/
urlpatterns = [
    url(r'^$', views.index, name='index'),

    # /events/eventdetails/ OR /events/<event_id>
    url(r'^(?P<events_id>[0-9]+)/$', views.detail, name = 'detail'),

    # /users/signup:url to take the input from the user
    url(r'^signup/$', views.signup, name='signup'),

    #/users/showdata:url to display the list of users stored on the database
    url(r'^showdata/$', views.showdata, name='showdata'),
]

