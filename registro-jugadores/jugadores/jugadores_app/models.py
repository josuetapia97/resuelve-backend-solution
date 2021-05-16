from django.db import models

# Create your models here.
class Nivel(models.Model):
    nivel = models.CharField(max_length=30)
    goles_mes = models.IntegerField()
    def __str__(self):
        return self.nivel
    class Meta:
        db_table = 'niveles'

class Equipo(models.Model):
    nombre = models.CharField(max_length=30)
    def __str__(self):
        return self.nombre
    class Meta:
        db_table = 'equipos'

class Jugador(models.Model):
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50,blank=True,null=True)
    nivel = models.ForeignKey(Nivel,on_delete=models.CASCADE)
    goles = models.IntegerField()
    sueldo = models.IntegerField()
    bono = models.IntegerField()
    equipo = models.ForeignKey(Equipo,on_delete=models.CASCADE)
    def __srt__(self):
        return self.nonbre
    class Meta:
        db_table = 'jugadores'