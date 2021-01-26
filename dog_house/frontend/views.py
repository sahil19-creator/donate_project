from django.shortcuts import render
from frontend.models import Animals
# Create your views here.
def home(request):
    try:
        return render(request,"index.html")
    except Exception as e:
        print("Error in Fetching Home ::::::",e )

def donate_page(request):
    try:
        obj = Animals.objects.all()
        return render(request,"donate.html",{'Animal_data':obj})
    except Exception as e:
        print("Error in payment page ::::: ",e )