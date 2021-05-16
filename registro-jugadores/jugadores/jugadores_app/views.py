#from django.shortcuts import render

# Create your views here.
# from django.contrib.auth.models import User, Group
from .models import Nivel,Equipo,Jugador
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import NivelSerializer, EquipoSerializer,JugadorSerializer


class NivelViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Nivel.objects.all().order_by('nivel')
    serializer_class = NivelSerializer
    #permission_classes = [permissions.IsAuthenticated]


class EquipoViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Equipo.objects.all().order_by('nombre')
    serializer_class = EquipoSerializer
    #permission_classes = [permissions.IsAuthenticated]

class JugadorViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Jugador.objects.all().order_by('nombre')
    serializer_class = JugadorSerializer
    #permission_classes = [permissions.IsAuthenticated]