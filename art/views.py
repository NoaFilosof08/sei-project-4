# pylint: disable=no-member, no-self-use
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound

from .models import Art
from .serializers import PopulatedArtSerializer

class ArtListView(APIView):

    def get(self, _request):
        arts = Art.objects.all()
        serialized_arts = PopulatedArtSerializer(arts, many=True)
        return Response(serialized_arts.data, status=status.HTTP_200_OK)

class ArtDetailView(APIView):

    def get_art(self, pk):
        try:
            return Art.objects.get(pk=pk)
        except Art.DoesNotExist:
            raise NotFound()

    def get(self, _request, pk):
        art = self.get_art(pk)
        serialized_art = PopulatedArtSerializer(art)
        return Response(serialized_art.data, status=status.HTTP_200_OK)
