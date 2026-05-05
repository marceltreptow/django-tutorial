from django.shortcuts import render
from django.http import HttpResponse
from store.models import Product
from django.db.models import Q, F

# Create your views here.
def say_hello(request):
    # Sort output
    products = Product.objects.all().order_by('price', '-title')
    # productsingle = Product.objects.all().order_by('price', '-title')[0]
    # products = Product.objects.all().order_by('price', '-title').reverse()

    # Every output
    for product in products:
       print(product)

    # Query output depending on values in fields
    producty = Product.objects.filter(price__gt=6, pk=1)
    for p in producty:
        print(p)
        
    # Query output with Complex Query operator
    producty = Product.objects.filter(Q(price__gt=6) | Q(pk=1))
    for p in producty:
        print(p)

    # Check if product exists and print
    if (Product.objects.filter(pk=1).exists()):
        productx = Product.objects.filter(pk=1)
        print(productx)

    # Limit query values to save costs
    # limitedproductsvalues = Product.objects.all().values('price')

    # interjoin
    limitedproductsvalues = Product.objects.all().values('promotion__discount')

    
    return render(request, 'hello.html', {'name': 'Marcel', 'products': products, 'limitedproductsvalues': limitedproductsvalues})

def get_products(request):
    product = Product.objects.all()
    return render(request, 'test.html', {'products': product})
