# !/usr/bin/python3
# -*- coding : utf-8 -*-
# coding: utf-8
'''该服务器技术人员：段禹珩'''
from library import *
from operation import Clog, _space_, _net_, _log_

app = Flask(__name__)
# app.config['SERVER_NAME'] = 'memory610'
# ip = '0.0.0.0'
# hostname = socket.gethostbyaddr(ip)[0]


'''网站保活监视'''
@app.route('/keep-alive', methods=["GET", "POST"])
def web_keep_alive ():
    return render_template('keep-alive.html', now=str(datetime.now()))

'''主要页面'''
@app.route('/', methods=["GET", "POST"])
def main ():
    Clog("201710重拾记忆！")
    return render_template('mainpage.html')

@app.route('/help', methods=["GET", "POST"])
def help_doubt ():
    return render_template('help.html')

@app.route('/610stalk', methods=["GET", "POST"])
def stalk ():
    return render_template('610stalk.html')

@app.route('/stalhelp', methods=["GET", "POST"])
def stalk_help ():
    return render_template('stalhelp.html')

@app.route('/WET', methods=["GET", "POST"])
def WebsitexEmployeeTable ():
    return render_template('EmployeeTable.html')

@app.route('/net', methods=["GET", "POST"])
def net ():
    return _net_()


'''隐藏页面'''
@app.route('/610web', methods=["GET", "POTS"])
def source1 ():
    return render_template('source.html')

@app.route('/610web/log', methods=["GET", "POST"])
def log ():
    return _log_()

@app.route('/610web/<all>', methods=["GET", "POTS"])
def source2 (all):
    return render_template('source.html')


'''个人网站'''
@app.route('/<space>', methods=["GET", "POST"])
def space (space):
    return _space_(space=space)


'''报错页面'''
@app.errorhandler(404)
def show_404_page(no):
    return render_template('r404.html'), 404

@app.errorhandler(500)
def show_500_page(no):
    return render_template('r500.html'), 500


'''运行程序'''
if __name__ == "__main__":
    app.config["JSON_AS_ASCII"] = True
    app.run(host="0.0.0.0", port=80, debug=True, threaded=True, processes=1)
    # app.run(debug=True, ssl_context=())

    # server = pywsgi.WSGIServer(('0.0.0.0', 80), app)
    # server.serve_forever()

'''该服务器技术人员：段禹珩'''
