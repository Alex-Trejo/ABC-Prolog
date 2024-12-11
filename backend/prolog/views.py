from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from pyswip import Prolog

# Create your views here.
class PrologView(APIView):

    def get(self, request):
        prolog = Prolog()
        prolog.consult("se.pl")

        return Response("Hello, World!", status=status.HTTP_200_OK)