from django.db import models
import datetime

class Days(models.Model):
    day = models.CharField(max_length=15)
    def __str__(self):
        return self.day

class MyUser(models.Model):
    username = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    imageURl = models.CharField(max_length=255, null=True, blank=True)
    bio = models.CharField(max_length=255, null=True, blank=True)

class Habit(models.Model):
    name = models.CharField(max_length=20, default="")
    description = models.CharField(max_length=255, default="")
    consistency = models.ManyToManyField(Days, default=["Monday"])
    user = models.ForeignKey(MyUser, on_delete=models.CASCADE, blank=True, null=True)
    def __str__(self):
        return self.name

class OneHabit(models.Model):
    STATUS = [("complete", "complete"), ("incomplete", "incomplete")]
    dueDate = models.DateField(default=datetime.datetime.now)
    status = models.CharField(max_length=15, choices=STATUS, default="incomplete")
    habit = models.ForeignKey(Habit, on_delete=models.CASCADE, blank=True, null=True)
    def __str__(self):
        return self.habit.name + " -> " + str(self.dueDate)
