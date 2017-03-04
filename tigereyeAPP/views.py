from django.http import HttpResponse
from django.http import Http404
from django.shortcuts import render
from . models import Events

def index(request):
    all_events = Events.objects.all()
    context = {'all_events' : all_events,}
    return render(request, 'index.html', context)


def detail(request, events_id):
    try:
        event = Events.objects.get(pk=events_id)
    except Events.DoesNotExist:
        raise Http404("Event does not exist")
    return render(request, 'details.html', {'event' : event})


