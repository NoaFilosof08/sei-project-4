# pylint: disable=no-member, no-self-use
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound
from .models import Enquiry

from .serializers import EnquirySerializer

class EnquiryListView(APIView):

    def post(self, request):
        created_enquiry = EnquirySerializer(data=request.data)
        if created_enquiry.is_valid():
            created_enquiry.save()
            return Response(created_enquiry.data, status=status.HTTP_201_CREATED)
        return Response(created_enquiry.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

class EnquiryDetailView(APIView):

    def get_enquiry(self, pk):
        try:
            return Enquiry.objects.get(pk=pk)
        except Enquiry.DoesNotExist:
            raise NotFound()

    def delete(self, _request, pk):
        enquiry_to_delete = self.get_enquiry(pk)
        enquiry_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
