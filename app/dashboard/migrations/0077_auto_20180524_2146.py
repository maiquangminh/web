# Generated by Django 2.0.5 on 2018-05-24 21:46

import django.contrib.postgres.fields.jsonb
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0076_profile_trust_profile'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='repos_data',
            field=django.contrib.postgres.fields.jsonb.JSONField(blank=True, default={}),
        ),
    ]