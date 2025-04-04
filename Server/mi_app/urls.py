from django.urls import include

urlpatterns = [
    ...,
    path('', include('mi_app.urls')),
]
