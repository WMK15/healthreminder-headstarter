# Generated by Django 5.0.7 on 2024-07-28 06:09

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("health", "0002_habit_description_habit_duedate_habit_status_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="habit",
            name="consistency",
            field=models.ManyToManyField(to="health.days"),
        ),
    ]
