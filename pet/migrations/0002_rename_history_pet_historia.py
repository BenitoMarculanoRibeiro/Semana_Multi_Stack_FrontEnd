# Generated by Django 4.0.4 on 2022-06-04 19:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pet', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='pet',
            old_name='history',
            new_name='historia',
        ),
    ]