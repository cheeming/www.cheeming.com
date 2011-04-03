from django.http import HttpRequest
from django.template.context import RequestContext
from django.template.loader import render_to_string


def run():
    request = HttpRequest()
    html = render_to_string('static/base.html',
        context_instance=RequestContext(request))
    f = file('out.html', 'w')
    f.write(html)
    f.close()


if __name__ == '__main__':
    run()
