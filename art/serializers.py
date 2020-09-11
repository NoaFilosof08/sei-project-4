from rest_framework import serializers
from enquiries.serializers import EnquirySerializer
from .models import Art

class ArtSerializer(serializers.ModelSerializer):

    class Meta:
        model = Art
        fields = '__all__'

class PopulatedArtSerializer(ArtSerializer):

    enquiries = EnquirySerializer(many=True)
