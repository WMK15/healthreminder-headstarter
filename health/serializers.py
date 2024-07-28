from rest_framework import serializers
from .models import Habit, OneHabit

class HabitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Habit
        fields = "__all__"

class OneHabitSerializer(serializers.ModelSerializer):
    class Meta:
        model = OneHabit
        fields = "__all__"