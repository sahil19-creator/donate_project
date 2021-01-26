from django.db import models

# Create your models here.
class Animals(models.Model):
    name = models.CharField(max_length=233)
    desc = models.CharField(max_length=233)
    join_date = models.DateField(null=True)
    pic = models.ImageField(upload_to="media/images",default="pic.jpg")
    
    def __str__(self):
        return self.name