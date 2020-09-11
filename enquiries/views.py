# pylint: disable=no-member, no-self-use
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound, PermissionDenied
from rest_framework.permissions import IsAuthenticated
from .models import Enquiry

from .serializers import EnquirySerializer

class EnquiryListView(APIView):

    permission_classes = (IsAuthenticated, )

    def post(self, request):
        request.data['owner'] = request.user.id
        created_enquiry = EnquirySerializer(data=request.data)
        if created_enquiry.is_valid():
            created_enquiry.save()
            return Response(created_enquiry.data, status=status.HTTP_201_CREATED)
        return Response(created_enquiry.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

class EnquiryDetailView(APIView):

    permission_classes = (IsAuthenticated, )

    def get_enquiry(self, pk):
        try:
            return Enquiry.objects.get(pk=pk)
        except Enquiry.DoesNotExist:
            raise NotFound()

    def is_enquiry_owner(self, enquiry, user):
        if enquiry.owner.id != user.id:
            raise PermissionDenied()

    def delete(self, request, pk):
        enquiry_to_delete = self.get_enquiry(pk)
        self.is_enquiry_owner(enquiry_to_delete, request.user)
        enquiry_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
