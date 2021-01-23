from django.shortcuts import render

# Create your views here.
def home(request):
    try:
        return render(request,"index.html")
    except Exception as e:
        print("Error in Fetching Home ::::::",e )