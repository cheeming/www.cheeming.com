from os import path
from django.http import HttpRequest
from django.template.context import RequestContext
from django.template.loader import render_to_string


def run(output_path):
    request = HttpRequest()
    request.META['REMOTE_ADDR'] = '127.0.0.1'
    for fname in [
        'index.html',
        'error.html',
        ]:
        html = render_to_string('static/%s' % fname,
            context_instance=RequestContext(request))
        f = file(path.join(output_path, fname), 'w')
        f.write(html)
        f.close()


if __name__ == '__main__':
    import sys
    output_path = sys.argv[1]
    run(output_path)
