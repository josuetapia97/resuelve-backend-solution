from django.contrib import admin
from .models import Nivel,Equipo,Jugador
# Register your models here.
class NivelAdmin(admin.ModelAdmin):
    list_display = ['nivel', 'goles_mes']
    ordering = ['nivel']

class EquipoAdmin(admin.ModelAdmin):
    list_display = ['nombre']
    ordering = ['nombre']

class JugadorAdmin(admin.ModelAdmin):
    list_display = ['nombre', 'nivel','goles','sueldo','bono','equipo']
    ordering = ['nombre']

admin.site.register(Nivel, NivelAdmin)
admin.site.register(Equipo, EquipoAdmin)
admin.site.register(Jugador, JugadorAdmin)