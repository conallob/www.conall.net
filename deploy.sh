#!/usr/local/bin/bash

hugo && rsync -Pvar --delete ./public/* /www/conall.net/www/
