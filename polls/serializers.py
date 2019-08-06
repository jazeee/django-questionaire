from rest_framework import serializers
from .models import Question, Response

class ResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Response
        fields = '__all__'

class QuestionSerializer(serializers.ModelSerializer):
    responses = ResponseSerializer(many=True, read_only=True)
    class Meta:
        model = Question
        fields = '__all__'
