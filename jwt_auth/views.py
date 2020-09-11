# pylint: disable=no-member, no-self-use
from datetime import datetime, timedelta
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import PermissionDenied
from rest_framework import status
from django.contrib.auth import get_user_model
from django.conf import settings
import jwt

from .serializers import UserSerializer
User = get_user_model()

class RegisterView(APIView):

    def post(self, request):
        created_user = UserSerializer(data=request.data)
        if created_user.is_valid():
            created_user.save()
            return Response({'message', 'Registration Succesful'}, status=status.HTTP_201_CREATED)
        return Response(created_user.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
