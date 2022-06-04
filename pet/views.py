from rest_framework.views import APIView
from .models import Pet
class PetList(APIView):
    def get(self, request,format=None):
        pets = Pet.objects.all()