from django.db import models
from django.db.models import Model
# Create your models here.
class MyModel(models.Model):
    upload = models.ImageField()

class GeeksModel(Model):
    geeks = models.ImageField()

STATUS_CHOICES = [
    ('open', 'Open'),
    ('closed', 'Closed'),
    ('out_of_order', 'Out of Order'),
    ('maintenance', 'Under Maintenance'),
]

ITEM_TYPES = [
    ('printer', 'Printer'),
    ('bathroom', 'Bathroom'),
    ('microwave', 'Microwave'),
    ('parking_lot', 'Parking Lot'),
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

    # Status
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='open')
    last_verified = models.DateTimeField(null=True, blank=True)

    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.name} ({self.item_type}) - Floor {self.floor} [{self.status}]"