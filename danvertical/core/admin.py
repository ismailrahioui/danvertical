from django.contrib import admin

# Register your models here.

from .models import service, ServiceImage,SubscribedUsers

class PostImageAdmin(admin.StackedInline):
    model = ServiceImage

@admin.register(service)
class PostAdmin(admin.ModelAdmin):
    inlines = [PostImageAdmin]

    class Meta:
       model = service

@admin.register(ServiceImage)
class PostImageAdmin(admin.ModelAdmin):
    pass

 

class SubscribedUsersAdmin(admin.ModelAdmin):
    list_display = ('email', 'subscribe_date')


admin.site.register(SubscribedUsers, SubscribedUsersAdmin)