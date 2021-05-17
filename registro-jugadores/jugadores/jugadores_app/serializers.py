from .models import Nivel,Equipo,Jugador
from rest_framework import serializers


class NivelSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Nivel
        fields = ['id','nivel','goles_mes']

class EquipoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Equipo
        fields = ['id','nombre']

class JugadorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Jugador
        fields = ['id','nombre','apellido','nivel','goles','sueldo','bono','equipo']