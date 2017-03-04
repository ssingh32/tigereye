from django.http import HttpResponse
from . models import Events

def index(request):
    all_events = Events.objects.all()
    html = ''
    for event in all_events:
        url = '/events/' + str(Events.id) + '/'
        html += '<a href= "' + url + '">' + event.name + '</a><br>'
    return HttpResponse(html)


def detail(request, events_id):
    return HttpResponse("<h2>Details for event id: " + str(events_id) + "</h2>")
