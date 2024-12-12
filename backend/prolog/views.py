from django.shortcuts import render
from rest_framework.serializers import Serializer, CharField
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
        so = request.data.get("os")

        res = list(prolog.query(f'vulnerabilidades_por_so("{so}", Vulnerabilidades).'))

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

        res = list(prolog.query(f'analisis_explotabilidad({EPSS}, Vulnerabilidades).'))
        llaves = ["ID", "Descripcion", "EPSS", "Version"]
        # Convertir lista de listas a lista de diccionarios
        lista_diccionarios = [dict(zip(llaves, sublista)) for sublista in res[0]["Vulnerabilidades"]]
        # Convertir a JSON
        
        serial = ItemSerializer(lista_diccionarios, many=True).data
        data = {"status": "success", "items": serial}

        return Response(data)
    
class Search_by_Date(APIView):

    def post(self, request):
        prolog = Prolog()

        # Obtén la ruta absoluta al archivo se.pl
        base_dir = os.path.dirname(os.path.abspath(__file__))
        ruta_prolog = os.path.join(base_dir, "se.pl")

        prolog.consult(ruta_prolog)
        fecha = request.data.get("fecha")

        res = list(prolog.query(f'vulnerabilidades_por_fecha("{fecha}", Vulnerabilidades).'))

        llaves = ["ID", "Descripcion", "EPSS", "Version"]
        # Convertir lista de listas a lista de diccionarios
        lista_diccionarios = [dict(zip(llaves, sublista)) for sublista in res[0]["Vulnerabilidades"]]
        # Convertir a JSON
        
        serial = ItemSerializer(lista_diccionarios, many=True).data
        data = {"status": "success", "items": serial}
        
        return Response(data)
    
class Search_by_Version(APIView):

    def post(self, request):
        prolog = Prolog()

        # Obtén la ruta absoluta al archivo se.pl
        base_dir = os.path.dirname(os.path.abspath(__file__))
        ruta_prolog = os.path.join(base_dir, "se.pl")

        prolog.consult(ruta_prolog)
        version = request.data.get("version")

        res = list(prolog.query(f'vulnerabilidades_por_version("{version}", Vulnerabilidades).'))

        llaves = ["ID", "Descripcion", "EPSS", "Version"]
        # Convertir lista de listas a lista de diccionarios
        lista_diccionarios = [dict(zip(llaves, sublista)) for sublista in res[0]["Vulnerabilidades"]]
        # Convertir a JSON
        
        serial = ItemSerializer(lista_diccionarios, many=True).data
        data = {"status": "success", "items": serial}
        
        return Response(data)
    
class Search_by_CVE(APIView):

    def post(self, request):
        prolog = Prolog()

        # Obtén la ruta absoluta al archivo se.pl
        base_dir = os.path.dirname(os.path.abspath(__file__))
        ruta_prolog = os.path.join(base_dir, "se.pl")

        prolog.consult(ruta_prolog)
        cve = request.data.get("cve")

        res = list(prolog.query(f'vulnerabilidades_por_cve("{cve}", Vulnerabilidades).'))

        llaves = ["ID", "Descripcion", "EPSS", "Version"]
        # Convertir lista de listas a lista de diccionarios
        lista_diccionarios = [dict(zip(llaves, sublista)) for sublista in res[0]["Vulnerabilidades"]]
        # Convertir a JSON
        
        serial = ItemSerializer(lista_diccionarios, many=True).data
        data = {"status": "success", "items": serial}
        
        return Response(data)
    
class Search_by_Text(APIView):

    def post(self, request):
        prolog = Prolog()

        # Obtén la ruta absoluta al archivo se.pl
        base_dir = os.path.dirname(os.path.abspath(__file__))
        ruta_prolog = os.path.join(base_dir, "se.pl")

        prolog.consult(ruta_prolog)
        texto = request.data.get("texto")

        res = list(prolog.query(f'vulnerabilidades_por_texto("{texto}", Vulnerabilidades).'))

        llaves = ["ID", "Descripcion", "EPSS", "Version"]
        # Convertir lista de listas a lista de diccionarios
        lista_diccionarios = [dict(zip(llaves, sublista)) for sublista in res[0]["Vulnerabilidades"]]
        # Convertir a JSON
        
        serial = ItemSerializer(lista_diccionarios, many=True).data
        data = {"status": "success", "items": serial}
        
        return Response(data)
    
class Probabilty_SO(APIView):

    def post(self, request):
        prolog = Prolog()

        # Obtén la ruta absoluta al archivo se.pl
        base_dir = os.path.dirname(os.path.abspath(__file__))
        ruta_prolog = os.path.join(base_dir, "se.pl")

        prolog.consult(ruta_prolog)
        so = request.data.get("os")

        res = list(prolog.query(f'probabilidad_vulnerabilidad("{so}", P).'))
        return Response(res[0]["P"])
    
class Probabilty_Version(APIView):

    def post(self, request):
        prolog = Prolog()

        # Obtén la ruta absoluta al archivo se.pl
        base_dir = os.path.dirname(os.path.abspath(__file__))
        ruta_prolog = os.path.join(base_dir, "se.pl")

        prolog.consult(ruta_prolog)
        so = request.data.get("os")
        version = request.data.get("version")

        res = list(prolog.query(f'probabilidad_vulnerabilidad_por_version("{version}", "{so}", P).'))
        return Response(res[0]["P"])
    
class Vulnerabilities_Driver(APIView):

    def post(self, request):
        prolog = Prolog()

        # Obtén la ruta absoluta al archivo se.pl
        base_dir = os.path.dirname(os.path.abspath(__file__))
        ruta_prolog = os.path.join(base_dir, "se.pl")

        prolog.consult(ruta_prolog)
        so = request.data.get("os")

        res = list(prolog.query(f'vulnerabilidades_por_driver("{so}", Vulnerabilidades).'))

        llaves = ["ID", "Descripcion", "EPSS", "Version"]
        # Convertir lista de listas a lista de diccionarios
        lista_diccionarios = [dict(zip(llaves, sublista)) for sublista in res[0]["Vulnerabilidades"]]
        # Convertir a JSON
        
        serial = ItemSerializer(lista_diccionarios, many=True).data
        data = {"status": "success", "items": serial}
        
        return Response(data)
    
class Vulnerabilities_Attack(APIView):

    def post(self, request):
        prolog = Prolog()

        # Obtén la ruta absoluta al archivo se.pl
        base_dir = os.path.dirname(os.path.abspath(__file__))
        ruta_prolog = os.path.join(base_dir, "se.pl")

        prolog.consult(ruta_prolog)
        so = request.data.get("os")

        res = list(prolog.query(f'vulnerabilidades_por_ataque("{so}", Vulnerabilidades).'))

        llaves = ["ID", "Descripcion", "EPSS", "Version"]
        # Convertir lista de listas a lista de diccionarios
        lista_diccionarios = [dict(zip(llaves, sublista)) for sublista in res[0]["Vulnerabilidades"]]
        # Convertir a JSON
        
        serial = ItemSerializer(lista_diccionarios, many=True).data
        data = {"status": "success", "items": serial}
        
        return Response(data)
    
class Vulnerabilities_Access(APIView):

    def post(self, request):
        prolog = Prolog()

        # Obtén la ruta absoluta al archivo se.pl
        base_dir = os.path.dirname(os.path.abspath(__file__))
        ruta_prolog = os.path.join(base_dir, "se.pl")

        prolog.consult(ruta_prolog)
        so = request.data.get("os")

        res = list(prolog.query(f'vulnerabilidades_por_acceso("{so}", Vulnerabilidades).'))

        llaves = ["ID", "Descripcion", "EPSS", "Version"]
        # Convertir lista de listas a lista de diccionarios
        lista_diccionarios = [dict(zip(llaves, sublista)) for sublista in res[0]["Vulnerabilidades"]]
        # Convertir a JSON
        
        serial = ItemSerializer(lista_diccionarios, many=True).data
        data = {"status": "success", "items": serial}
        
        return Response(data)