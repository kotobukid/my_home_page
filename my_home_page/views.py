from django.http import HttpResponse, JsonResponse
from django.template import loader
from my_home_page.models import Link


def index(request):
    template = loader.get_template('index.html')
    context = {
    }
    return HttpResponse(template.render(context, request))


def links(request):
    _links = Link.objects.all()

    return JsonResponse({
        "links": [link.to_json() for link in _links]
    })
