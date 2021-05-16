from .models import Nivel,Equipo,Jugador
from rest_framework import serializers


class NivelSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Nivel
        fields = ['nivel','goles_mes']


class EquipoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Equipo
        fields = ['nombre']

class JugadorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Jugador
        fields = ['nombre','apellido','nivel','goles','sueldo','bono','equipo']