from django.urls import path
from.views import ArtListView, ArtDetailView

urlpatterns = [
    path('', ArtListView.as_view()),
    path('<int:pk>/', ArtDetailView.as_view())
]
