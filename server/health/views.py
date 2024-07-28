from .models import Habit, OneHabit, MyUser
from django.http import JsonResponse
from .serializers import CustomTokenObtainPairSerializer, HabitSerializer, OneHabitSerializer, RegisterSerializer, UserSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status, generics, permissions
from rest_framework_simplejwt.views import TokenObtainPairView

@api_view(['GET', 'POST'])
@permission_classes([permissions.IsAuthenticated])
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
@permission_classes([permissions.IsAuthenticated])
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
@permission_classes([permissions.IsAuthenticated])
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
@permission_classes([permissions.IsAuthenticated])
def one_habit_detail(request, id, format=None):
    
    try:
        one_habit = OneHabit.objects.get(pk=id)
    except OneHabit.DoesNotExist:
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
    
@api_view(['GET', 'POST'])
def user_list(request, format=None):
    if request.method == 'GET':
        users = MyUser.objects.all()
        serializer = UserSerializer(users, many=True)
        return JsonResponse(serializer.data, safe=False)   
    
    if request.method == 'POST':
        serializer = UserSerializer(data = request.data) 
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([permissions.IsAuthenticated])
def user_detail(request, id, format=None):
    
    try:
        user = MyUser.objects.get(pk=id)
    except MyUser.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
        
    if request.method == 'GET':
        serializer = UserSerializer(user)
        return Response(serializer.data)
    if request.method == 'PUT':
        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    if request.method == 'DELETE':
        user.delete()
        return Response(status=status.http_204_NO_CONTENT)

@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def register_view(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        return Response(UserSerializer(user).data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def custom_token_obtain_pair_view(request):
    serializer = CustomTokenObtainPairSerializer(data=request.data)
    try:
        serializer.is_valid(raise_exception=True)
        token = serializer.validated_data['token']
        return Response(serializer.validated_data, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({"detail": str(e)}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def user_view(request):
    user = request.user
    serializer = UserSerializer(user)
    return Response(serializer.data, status=status.HTTP_200_OK)
