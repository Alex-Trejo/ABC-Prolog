from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from pyswip import Prolog
import os

# Create your views here.
class Complete_Search(APIView):

    def get(self, request):
        prolog = Prolog()

        # Obtén la ruta absoluta al archivo se.pl
        base_dir = os.path.dirname(os.path.abspath(__file__))
        ruta_prolog = os.path.join(base_dir, "se.pl")

        prolog.consult(ruta_prolog)
        so = request.data.get("so")

        res = list(prolog.query(f'tiene_vulnerabilidades("{so}", Vulnerabilidades).'))

        return Response(res[0]["Vulnerabilidades"])
    
class Search_by_Risk(APIView):

    def get(self, request):
        prolog = Prolog()

        # Obtén la ruta absoluta al archivo se.pl
        base_dir = os.path.dirname(os.path.abspath(__file__))
        ruta_prolog = os.path.join(base_dir, "se.pl")

        prolog.consult(ruta_prolog)
        EPSS = request.data.get("epss")

        res = list(prolog.query(f'analisis_explotabilidad({EPSS}, Lista).'))

        return Response(res[0]["Lista"])