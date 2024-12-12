from django.urls import path
from .views import Complete_Search, Search_by_Risk, Search_by_Version, Search_by_CVE, Search_by_Date, Search_by_Text, Probabilty_SO, Probabilty_Version, Vulnerabilities_Driver, Vulnerabilities_Attack, Vulnerabilities_Access

urlpatterns = [
    path('complete/', Complete_Search.as_view()),
    path('risk/', Search_by_Risk.as_view()),
    path('version/', Search_by_Version.as_view()),
    path('date/', Search_by_Date.as_view()),
    path('text/', Search_by_Text.as_view()),
    path('cve/', Search_by_CVE.as_view()),
    path('probability_so/', Probabilty_SO.as_view()),
    path('probability_version/', Probabilty_Version.as_view()),
    path('driver/', Vulnerabilities_Driver.as_view()),
    path('attack/', Vulnerabilities_Attack.as_view()),
    path('access/', Vulnerabilities_Access.as_view())
]