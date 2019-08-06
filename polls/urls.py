from django.urls import path

from . import views
from . import apis

app_name = 'polls'
urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('<int:pk>/', views.DetailView.as_view(), name='detail'),
    path('<int:pk>/results/', views.ResultsView.as_view(), name='results'),
    path('<int:question_id>/vote/', views.vote, name='vote'),

    path('api/questions', apis.QuestionListCreate.as_view()),
    path('api/questions/<int:pk>', apis.QuestionRetrieve.as_view()),
    path('api/questions/<int:question_id>/responses', apis.ResponseListCreate.as_view()),
    path('api/questions/<int:question_id>/responses/<int:pk>', apis.ResponseRetrieve.as_view()),
]
