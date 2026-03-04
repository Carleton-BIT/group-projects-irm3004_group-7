from django.db import models
from django.db.models import Model
# Create your models here.
class MyModel(models.Model):
    upload = models.ImageField()

class GeeksModel(Model):
    geeks = models.ImageField()

ITEM_TYPES = [
    ('printer', 'Printer'),
    ('bathroom', 'Bathroom'),
    ('microwave', 'Microwave'),
    ('Parking Lot', 'parking lot'),3
]

class MapItem(models.Model):
    # Location
    x = models.FloatField()
    y = models.FloatField()
    floor = models.IntegerField(default=1)

    # Descriptive info
    name = models.CharField(max_length=200)
    item_type = models.CharField(max_length=50, choices=ITEM_TYPES, default='other')
    description = models.TextField(blank=True)

    def __str__(self):
        return f"{self.name} ({self.item_type}) - Floor {self.floor}"