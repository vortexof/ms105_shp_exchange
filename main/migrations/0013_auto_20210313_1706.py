# Generated by Django 3.1.7 on 2021-03-13 14:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0012_auto_20210307_1030'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Offers',
            new_name='Order',
        ),
    ]
