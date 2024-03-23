from django.utils import timezone
from django.db import models

# Create your models here.

class service (models.Model):
    title=models.CharField(max_length=250)
    description=models.TextField()
    image=models.FileField(blank=True)

    def __str__(self):
        return self.title

class ServiceImage(models.Model):
    service=models.ForeignKey(service,default=None,on_delete=models.CASCADE)
    images=models.FileField(upload_to='images/%Y/%m/%d')

    def __str__(self) -> str:
        return self.service.title
    

    from django.utils import timezone
...
class SubscribedUsers(models.Model):
    email = models.EmailField(unique=True, max_length=100)
    subscribe_date = models.DateTimeField('Date created', default=timezone.now)

    def __str__(self):
        return self.email