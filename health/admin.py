from django.contrib import admin
from .models import Habit, Days, OneHabit

admin.site.register(Habit)
admin.site.register(Days)
admin.site.register(OneHabit)