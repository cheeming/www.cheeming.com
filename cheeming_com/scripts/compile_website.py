from django.conf import settings
from django.http import HttpRequest
from django.template.context import RequestContext
from django.template.loader import render_to_string
from os import makedirs
from os import path


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
    if settings.DEBUG:
        print 'DEBUG mode'
    import sys
    output_path = 'dist/'
    if len(sys.argv) > 1:
        output_path = sys.argv[1]
    if not path.exists(output_path):
        makedirs(output_path)
    run(output_path)
