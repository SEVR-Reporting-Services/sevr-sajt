#!/usr/bin/env python3
"""Minimal static file server for the SEVR Insights site.

Runs without depending on the process's inherited working directory
(which is unreadable in this sandbox) by chdir-ing to an absolute path first.
Uses a threading server so keep-alive connections from one browser tab can't
block requests from another (single-threaded servers appear to "hang").
"""
import os
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

ROOT = "/Users/oleksandrzakabluk/Documents/Playground/sevr-insights-site"
PORT = 4321

os.chdir(ROOT)


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def log_message(self, *args):
        pass


httpd = ThreadingHTTPServer(("127.0.0.1", PORT), Handler)
httpd.daemon_threads = True
httpd.serve_forever()
