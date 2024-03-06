from django.shortcuts import render
from django.http import JsonResponse

def test_backend(request):
    return JsonResponse({'message': 'Backend connection successful'})
