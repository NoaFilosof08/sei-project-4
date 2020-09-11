from rest_framework import serializers
from enquiries.serializers import PopulatedEnquirySerializer
from .models import Art
from django.contrib.auth import get_user_model

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')

class ArtSerializer(serializers.ModelSerializer):

    class Meta:
        model = Art
        fields = '__all__'

class PopulatedArtSerializer(ArtSerializer):

    enquiries = PopulatedEnquirySerializer(many=True)
    owner = UserSerializer()
