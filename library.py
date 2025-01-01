# !/usr/bin/python3
# -*- coding : utf-8 -*-
# coding: utf-8

import flask, better_profanity, datetime, re, random, linecache, markupsafe, badwords, wcwidth, gevent, time

# from gevent import *
from flask import *
from markupsafe import *
# from profanity_check import *
from badwords import *
from better_profanity import *
from time import *
from datetime import *
from re import *
from linecache import *
from random import *
from wcwidth import *

from flask import Flask, render_template
# from gevent import pywsgi
from time import strftime
from random import choice
from markupsafe import Markup
from better_profanity import profanity
# from profanity_check import predict, predict_prob
# from datetime import datetime
from wcwidth import wcswidth

# import data, operation, main
