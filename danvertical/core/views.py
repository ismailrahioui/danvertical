from django.contrib import messages
from django.shortcuts import get_object_or_404, redirect, render
from .models import service,ServiceImage
from django.core.validators import validate_email
from django.core.exceptions import ValidationError
from .models import SubscribedUsers
from django.contrib.auth import get_user_model
from .decorators import user_is_superuser
from django.core.mail import send_mail
from django.conf import settings
from django.core.mail import EmailMessage
from .forms import NewsletterForm
from .models import SubscribedUsers
# Create your views here.


def index(request):
    services= service.objects.all()
    return render (request,'core/index.html',{'services':services})


def detail_view(request,id,title):
    services = get_object_or_404(service, pk=id,title=title)
    photos = ServiceImage.objects.filter(service=services)
    return render(request, 'core/portfolio-details.html', {
        'services':services,
        'photos':photos,
        
    })

def services(request):
    services= service.objects.all()
    return render (request,'core/services.html',{'services':services})

def contact(request):
    if request.method == 'POST':
        message = request.POST['message']
        send_mail('Contact Form',
            message, 
            settings.EMAIL_HOST_USER,
            ['ismail.0rahiouy@gmail.com'], 
            fail_silently=False)
    return render (request,'core/contact.html')

def subscribe(request):
      if request.method == 'POST':
        email = request.POST.get('email', None)

        if  not email:
            messages.error(request, "You must type legit name and email to subscribe to a Newsletter")
            return redirect("/")

        if get_user_model().objects.filter(email=email).first():
            messages.error(request, f"Found registered user with associated {email} email. You must login to subscribe or unsubscribe.")
            return redirect(request.META.get("HTTP_REFERER", "/")) 

        subscribe_user = SubscribedUsers.objects.filter(email=email).first()
        if subscribe_user:
            messages.error(request, f"{email} email address is already subscriber.")
            return redirect(request.META.get("HTTP_REFERER", "/"))  

        try:
            validate_email(email)
        except ValidationError as e:
            messages.error(request, e.messages[0])
            return redirect("/")

        subscribe_model_instance = SubscribedUsers()
        subscribe_model_instance.email = email
        subscribe_model_instance.save()
        messages.success(request, f'{email} email was successfully subscribed to our newsletter!')
        return redirect(request.META.get("HTTP_REFERER", "/"))






...

@user_is_superuser
def newsletter(request):
    if request.method == 'POST':
        form = NewsletterForm(request.POST)
        if form.is_valid():
            subject = form.cleaned_data.get('subject')
            receivers = form.cleaned_data.get('receivers').split(',')
            email_message = form.cleaned_data.get('message')

            mail = EmailMessage(subject, email_message, f"DanVertical<{request.user.email}>", bcc=receivers)
            mail.content_subtype="html"

            if mail.send():
                messages.success(request, "Email sent succesfully")
            else:
                messages.error(request, "There was an error sending email")

        else:
            for error in list(form.errors.values()):
                messages.error(request, error)

        return redirect('/')

    form = NewsletterForm()
    form.fields['receivers'].initial = ','.join([active.email for active in SubscribedUsers.objects.all()])
    return render(request=request, template_name='core/newsletter.html', context={'form': form})