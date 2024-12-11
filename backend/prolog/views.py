from django.shortcuts import render
from rest_framework.serializers import Serializer, CharField, IntegerField
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from pyswip import Prolog
import os
import json

class ItemSerializer(Serializer):
    ID = CharField()
    Descripcion = CharField()
    EPSS = CharField()
    Version = CharField()

# Create your views here.
class Complete_Search(APIView):

    def post(self, request):
        prolog = Prolog()

        # Obtén la ruta absoluta al archivo se.pl
        base_dir = os.path.dirname(os.path.abspath(__file__))
        ruta_prolog = os.path.join(base_dir, "se.pl")

        prolog.consult(ruta_prolog)
        so = request.data.get("so")

        res = list(prolog.query(f'tiene_vulnerabilidades("{so}", Vulnerabilidades).'))

        llaves = ["ID", "Descripcion", "EPSS", "Version"]
        # Convertir lista de listas a lista de diccionarios
        lista_diccionarios = [dict(zip(llaves, sublista)) for sublista in res[0]["Vulnerabilidades"]]
        # Convertir a JSON
        
        serial = ItemSerializer(lista_diccionarios, many=True).data
        data = {"status": "success", "items": serial}
        
        return Response(data)
    

class Search_by_Risk(APIView):

    def post(self, request):
        prolog = Prolog()

        # Obtén la ruta absoluta al archivo se.pl
        base_dir = os.path.dirname(os.path.abspath(__file__))
        ruta_prolog = os.path.join(base_dir, "se.pl")

        prolog.consult(ruta_prolog)
        EPSS = request.data.get("epss")

        res = list(prolog.query(f'analisis_explotabilidad({EPSS}, Lista).'))
        llaves = ["ID", "Descripcion", "EPSS", "Version"]
        # Convertir lista de listas a lista de diccionarios
        lista_diccionarios = [dict(zip(llaves, sublista)) for sublista in res[0]["Lista"]]
        # Convertir a JSON
        
        serial = ItemSerializer(lista_diccionarios, many=True).data
        data = {"status": "success", "items": serial}

        return Response(data)