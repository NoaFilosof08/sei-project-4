from django.urls import path
from .views import EnquiryListView, EnquiryDetailView

urlpatterns = [
    path('', EnquiryListView.as_view()),
    path('<int:pk>/', EnquiryDetailView.as_view())
]
