# !/usr/bin/python3
# -*- coding : utf-8 -*-
# coding: utf-8
'''该服务器技术人员：段禹珩'''
from library import *
import data
logininformation = data.get_logininformation()
information = data.personalinformation()
bad = data._bad_()


'''日志函数'''
def Clog (content):
    content = str(content)
    current = str(datetime.now())

    file = open(r'./data/log.txt', 'a', encoding='utf-8', errors="ignore", newline='\r\n')
    file.write(current + "  ——||——>  <strong>" + content + "</strong><br/>" + '\n')
    file.close()


'''判断610成员'''
def member (name, password):
    if name in logininformation.keys() and logininformation[name] == password:
        return True
    else:
        return False


'''判断敏感词函数'''
def verify (words):
    if profanity.contains_profanity(words):
        return False
    else:
        for i, value in enumerate(bad):
            if value in words:
                return False
        return True


'''后端运算'''
def _space_ (space):
    def space_main (name):
        sign = name + "："
        action = request.form.get('action')
        f_name = request.form.get('name')
        f_password = request.form.get('password')

        good_route = r"./data/space/good/" + name + ".txt"
        comment_route = r"./data/space/comment/" + name + ".txt"
        encoding = 'utf-8'
        readwrite_data_good = open(good_route, "r+", encoding=encoding, errors="ignore")
        readwrite_data_comment = open(comment_route, "r+", encoding=encoding, errors="ignore")

        good_data = int(readwrite_data_good.read())
        comment_data = str(readwrite_data_comment.read())

        def ret ():
            nonlocal good_data, comment_data

            def handle(price, way, info):
                if price == None:
                    if way == 0 or way == 1 or way == 3:
                        return ''
                    if way == 2:
                        return info
                else:
                    if way == 0:
                        return '<p>' + info + '：<strong>' + price + '</strong></p>'
                    if way == 1:
                        return '<p>' + info + '：<strong><a class="consultingService" href="tencent://message/?uin=' + price + '&Site=Sambow&Menu=info">' + price + '</a></strong></p>'
                    if way == 2 or way == 3:
                        return price

            return render_template("space.html",
                name=Markup(information[name]['name']),
                id=Markup(information[name]['id']),
                leave=Markup(handle(information[name]['leave'], 0, "留给610的话")),
                birthday=Markup(handle(information[name]['birthday'], 0, "生日")),
                constellation=Markup(handle(information[name]['constellation'], 0, "星座")),
                hobby=Markup(handle(information[name]['hobby'], 0, "爱好")),
                motto=Markup(handle(information[name]['motto'], 0, "座右铭")),
                goodfriend=Markup(handle(information[name]['goodfriend'], 0, "好朋友")),
                QQnumber=Markup(handle(information[name]['QQnumber'], 1, "QQ")),
                background=Markup(information[name]['background']),
                typeface=Markup(handle(information[name]['typeface'], 2, 'STSong')),
                music=Markup(information[name]['music']),
                specialeffects=Markup(handle(information[name]['specialeffects'], 3, "")),
                good=Markup(good_data),
                comment=Markup(comment_data)
            )

        if action == 'good_p':
            good_data += 1

            readwrite_data_good.seek(0)
            readwrite_data_good.truncate()
            readwrite_data_good.write(str(good_data))
            readwrite_data_good.close()

            Clog(sign + "被爱了")
            return ret()

        if action == 'sending':
            if member(f_name, f_password):
                comment_comment = request.form['comment']
                if verify(comment_comment):
                    comment_name = f_name
                    comment_time = strftime("%Y") + "年" + strftime("%m") + "月" + strftime("%d") + "日" + strftime("%H") + "时" + strftime("%M") + "分" + strftime("%S") + "秒"
                    comment_data += "<p><strong>" + comment_name + "：</strong>" + comment_comment + "<br><font size='3'>" + comment_time + "</font></p>" + "<hr>" + '\n'

                    readwrite_data_comment.seek(0)
                    readwrite_data_comment.truncate()
                    readwrite_data_comment.write(comment_data)
                    readwrite_data_comment.close()

                    Clog(sign + "被问候了")
                    return ret()
                else:
                    Clog(sign + "差点被吐槽了")
                    return ret()
            else:
                Clog(sign + "被陌生人问候了")
                return ret()
        else:
            Clog(sign + "被光临了")
            return ret()

    if space in information.keys():
        return space_main(space)
    else:
        return render_template('r404.html')

def _net_ ():
    action = str(request.form.get('action'))
    name = str(request.form.get('sayer'))
    password = str(request.form.get('password'))
    comment = str(request.form.get('say'))
    color = str(request.form.get('color'))

    content = open(r'./data/MessageContent.txt', "r+", encoding='utf-8', errors="ignore")

    contents = str(content.read())

    def ret ():
        nonlocal contents
        return render_template('net.html', message=Markup(str(contents)))

    if action == 'sending':
        if member(name, password) and verify(comment):
            TIME = "发送时间" + strftime("%x") + " " + strftime("%X")
            located = choice([True, False])
            if located:
                located_image = "net_people_boy"
                located_name = "net_name_boy"
                located_time = "net_time_boy"
                located_coby = "net_copy_common"
                located_main = "net_board_overshort-automatic"
            else:
                located_image = "net_people_boy-left"
                located_name = "net_name_boy-left"
                located_time = "net_time_boy-left"
                located_coby = "net_copy_common-left"
                located_main = "net_board_left-shorted-automatic"

            n, width, height, br = wcswidth(comment), 52, 80, 6
            if n < 64:
                for i in range(n, 0, -2):
                    height = 75
                    width += 32
            while True:
                if n >= 64:
                    height += 32
                    width = 920
                    br += 1
                    n -= 64
                else:
                    break

            if color == None:
                color = "net_img"

            part = '''<div class=" ''' + str(located_image) + ''' ">
    <img src="../static/images/photo/''' + str(name) + '''.png" class=" ''' + str(color) + ''' net_img">
</div>
<br/>
<strong class=" ''' + str(located_name) + ''' ">''' + str(name) + '''</strong>
<strong class=" ''' + str(located_time) + ''' ">''' + str(TIME) + '''</strong>
<div class="''' + str(located_coby) + '''">
    <strong>
        <a href="#" class="net_copy_text" onclick="copyToClipboard(' ''' + str(comment) + ''' —— ''' + str(name) + ''' ')">复制</a>
    </strong>
</div>
<br/> <br/>
<div class=" ''' + str(located_main) + ''' " style="width: ''' + str(width) + '''px; height: ''' + str(height) + '''px;">
    <strong class="net-automatic">
        ''' + str(comment) + '''
    </strong>
</div>
''' + str(int(br) * '<br/> ') + '''
''' + str(n) + '''
'''
            contents += str(part)

            content.seek(0)
            content.truncate()
            content.write(str(contents))
            content.close()

            return ret()

    return ret()

def _log_ ():
    return render_template('log.html',log=Markup(str(open(r'./data/log.txt', "r+", encoding='utf-8', errors="ignore").read())))
'''该服务器技术人员：段禹珩'''
