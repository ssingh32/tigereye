from django.http import HttpResponse
from django.template import loader
from . models import Events


def index(request):
    all_events = Events.objects.all()
    template = loader.get_template('index.html')
    context = {
       'all_events' : all_events,
    }
    return HttpResponse(template.render(context, request))


def detail(request, events_id):
    return HttpResponse("<h2>Details for event id: " + str(events_id) + "</h2>")
