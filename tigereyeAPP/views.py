from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404
from . models import Events
from . models import User
from . forms import UserForm

def index(request):
    all_events = Events.objects.all()
    context = {'all_events' : all_events,}
    return render(request, 'index.html', context)

def detail(request, events_id):
    event = get_object_or_404(Events, pk=events_id)
    return render(request, 'details.html', {'event' : event})

# the function executes with the signup url to take the inputs
def signup(request):
    if request.method == 'POST':  # if the form has been filled

        form = UserForm(request.POST)

        if form.is_valid():  # All the data is valid
            username = request.POST.get('username', '')
            email = request.POST.get('email', '')
        password = request.POST.get('password', '')
        # creating an user object containing all the data
        user_obj = User(username=username, email=email, password=password)
        # saving all the data in the current object into the database
        user_obj.save()

        return render(request, 'signup.html',
                      {'user_obj': user_obj, 'is_registered': True})  # Redirect after POST

    else:
        form = UserForm()  # an unboundform

        return render(request, 'signup.html', {'form': form})


# the function executes with the showdata url to display the list of registered users
def showdata(request):
    all_users = User.objects.all()
    return render(request, 'showdata.html', {'all_users': all_users, })