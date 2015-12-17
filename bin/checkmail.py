#!/usr/bin/env python
import urllib
url = 'https://mail.google.com/mail/feed/atom/'
opener = urllib.FancyURLopener()
f = opener.open(url)
feed = f.read()


