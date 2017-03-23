from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404
from . models import Events

def index(request):
    all_events = Events.objects.all()
    context = {'all_events' : all_events,}
    return render(request, 'index.html', context)


def detail(request, events_id):
    event = get_object_or_404(Events, pk=events_id)
    return render(request, 'details.html', {'event' : event})


