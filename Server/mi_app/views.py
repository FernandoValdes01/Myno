from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def mi_endpoint(request):
    if request.method == 'GET':
        return JsonResponse({"mensaje": "¡Endpoint funcionando!"})
