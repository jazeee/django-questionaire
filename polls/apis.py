from .models import Question, Response
from .serializers import QuestionSerializer, ResponseSerializer
from rest_framework import generics

class QuestionListCreate(generics.ListCreateAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

class QuestionRetrieve(generics.RetrieveAPIView):
    queryset = Question.objects.all()
    lookup_field = 'pk'
    serializer_class = QuestionSerializer

class ResponseListCreate(generics.ListCreateAPIView):
    queryset = Response.objects.all()
    lookup_field = 'question_id'
    serializer_class = ResponseSerializer

    def perform_create(self, serializer):
        print("This is happening %s\n" % self.kwargs['question_id'])
        question = Question.objects.get(id = self.kwargs['question_id'])
        serializer.save(question = question)

class ResponseRetrieve(generics.RetrieveAPIView):
    queryset = Response.objects.all()
    lookup_field = 'pk'
    serializer_class = ResponseSerializer
