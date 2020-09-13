from django.urls import path
from .views import RegisterView, LoginView, UserListView, UserDetailView, ProfileView, ProfileUnpopulatedView

urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('login/', LoginView.as_view()),
    path('artists/', UserListView.as_view()),
    path('artists/<int:pk>/', UserDetailView.as_view()),
    path('profile/', ProfileView.as_view()),
    path('profile/unpopulated/', ProfileUnpopulatedView.as_view()),
]
