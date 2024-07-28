from .models import Habit, OneHabit
from django.http import JsonResponse
from .serializers import HabitSerializer, OneHabitSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['GET', 'POST'])
def habit_list(request, format=None):
    if request.method == 'GET':
        habits = Habit.objects.all()
        serializer = HabitSerializer(habits, many=True)
        return JsonResponse(serializer.data, safe=False)   
    
    if request.method == 'POST':
        serializer = HabitSerializer(data = request.data) 
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
def habit_detail(request, id, format=None):
    
    try:
        habit = Habit.objects.get(pk=id)
    except Habit.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
        
    if request.method == 'GET':
        serializer = HabitSerializer(habit)
        return Response(serializer.data)
    if request.method == 'PUT':
        serializer = HabitSerializer(habit, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    if request.method == 'DELETE':
        habit.delete()
        return Response(status=status.http_204_NO_CONTENT)
    
@api_view(['GET', 'POST'])
def one_habit_list(request, format=None):
    if request.method == 'GET':
        habits = OneHabit.objects.all()
        serializer = OneHabitSerializer(habits, many=True)
        return JsonResponse(serializer.data, safe=False)   
    
    if request.method == 'POST':
        serializer = OneHabitSerializer(data = request.data) 
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
def one_habit_detail(request, id, format=None):
    
    try:
        one_habit = OneHabit.objects.get(pk=id)
    except Habit.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
        
    if request.method == 'GET':
        serializer = OneHabitSerializer(one_habit)
        return Response(serializer.data)
    if request.method == 'PUT':
        serializer = OneHabitSerializer(one_habit, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    if request.method == 'DELETE':
        one_habit.delete()
        return Response(status=status.http_204_NO_CONTENT)