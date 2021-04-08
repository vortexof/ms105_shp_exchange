# Generated by Django 3.1.7 on 2021-04-02 20:58

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_user_debt'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='debt',
        ),
        migrations.CreateModel(
            name='LeverageData',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ratio', models.IntegerField(default=1)),
                ('stock', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.stocks')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
