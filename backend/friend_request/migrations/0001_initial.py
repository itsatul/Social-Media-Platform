# Generated by Django 5.1.4 on 2025-01-10 14:19

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='FriendRequest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('friend_request_status', models.BooleanField(default=False)),
                ('friend_request_created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
