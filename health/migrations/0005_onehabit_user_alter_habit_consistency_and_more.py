# Generated by Django 5.0.7 on 2024-07-28 07:32

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("health", "0004_remove_habit_duedate_remove_habit_status_onehabit"),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name="onehabit",
            name="user",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                to=settings.AUTH_USER_MODEL,
            ),
        ),
        migrations.AlterField(
            model_name="habit",
            name="consistency",
            field=models.ManyToManyField(default=["Monday"], to="health.days"),
        ),
        migrations.AlterField(
            model_name="onehabit",
            name="habit",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                to="health.habit",
            ),
        ),
    ]
