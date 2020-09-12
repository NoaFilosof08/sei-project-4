# pylint: disable=no-member, no-self-use
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly

from .models import Art
from .serializers import PopulatedArtSerializer, ArtSerializer

class ArtListView(APIView):

    permission_classes = (IsAuthenticatedOrReadOnly, )

    def get(self, _request):
        arts = Art.objects.all()
        serialized_arts = PopulatedArtSerializer(arts, many=True)
        return Response(serialized_arts.data, status=status.HTTP_200_OK)

    def post(self, request):
        request.data['owner'] = request.user.id
        new_art = ArtSerializer(data=request.data)
        if new_art.is_valid():
            new_art.save()
            return Response(new_art.data, status=status.HTTP_201_CREATED)
        return Response(new_art.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

class ArtDetailView(APIView):

    permission_classes = (IsAuthenticatedOrReadOnly, )

    def get_art(self, pk):
        try:
            return Art.objects.get(pk=pk)
        except Art.DoesNotExist:
            raise NotFound()

    def get(self, _request, pk):
        art = self.get_art(pk)
        serialized_art = PopulatedArtSerializer(art)
        return Response(serialized_art.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        art_to_update = self.get_art(pk=pk)
        updated_art = ArtSerializer(art_to_update, data=request.data)
        if updated_art.is_valid():
            updated_art.save()
            return Response(updated_art.data, status=status.HTTP_202_ACCEPTED)
        return Response(updated_art.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    def delete(self, _request, pk):
        art_to_delete = self.get_art(pk=pk)
        art_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
