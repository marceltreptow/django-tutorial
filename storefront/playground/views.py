from django.shortcuts import render
from django.http import HttpResponse
from store.models import Product

# Create your views here.
def say_hello(request):
    products = Product.objects.all()

    for product in products:
       print(product)

    producty = Product.objects.filter(price__lt=6)
    for p in producty:
        print(p)

    if (Product.objects.filter(pk=1).exists()):
        productx = Product.objects.filter(pk=1)
        print(productx)
        
    
    return render(request, 'hello.html', {'name': 'Marcel', 'products': producty})
