from rest_framework import serializers
from .models import Pet


class PerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pet
        fields = ('id', 'nome', 'historia', 'foto')
