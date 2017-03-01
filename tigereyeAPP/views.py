from django.http import HttpResponse

def index(request):
    return HttpResponse("<h1>This is the events homepage</h1>")


def detail(request, events_id):
    return HttpResponse("<h2>Details for event id: " + str(events_id) + "</h2>")
