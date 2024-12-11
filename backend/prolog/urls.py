from django.urls import path
from .views import Complete_Search, Search_by_Risk

urlpatterns = [
    path('complete/', Complete_Search.as_view()),
    path('risk/', Search_by_Risk.as_view()),
]