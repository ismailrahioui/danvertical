from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views


urlpatterns = [
    path('',views.index,name='index'),
    path('services',views.services,name='services'),
    path('subscribe', views.subscribe, name='subscribe'),
    path("newsletter", views.newsletter, name="newsletter"),
    path('contact-us',views.contact,name='contact'),
    path('<int:id>/<str:title>/', views.detail_view, name='detail')
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)