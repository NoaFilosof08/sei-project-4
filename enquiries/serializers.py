from rest_framework import serializers
from .models import Enquiry
from django.contrib.auth import get_user_model

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')

class EnquirySerializer(serializers.ModelSerializer):

    class Meta:
        model = Enquiry
        fields = '__all__'

class PopulatedEnquirySerializer(EnquirySerializer):
    owner = UserSerializer()
