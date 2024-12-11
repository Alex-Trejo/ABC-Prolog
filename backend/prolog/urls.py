from django.urls import path
from .views import PrologView

urlpatterns = [
    path('test/', PrologView.as_view()),
]