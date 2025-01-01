function EndFirst() {
    var qianben = document.getElementById('rePeople');
    var links = qianben.innerText;

    if (links === '——五梗限定の噪音') {
      var ops = document.getElementById('ops-one');
      ops.textContent = '陪伴了六年的《老班长》';

      setTimeout(function() {
        alert('为何我感受到了一股...特殊的羁绊？');
      }, 450)
    }
}

function EndSecond() {
    var rs = document.getElementById('ops-one');
    var sec = rs.innerText;

    if (sec === '陪伴了六年的《老班长》') {
      var gits = prompt('陪伴了六年的《老班长》，请问其发明过甚么梗？\n提示：梗网站中就有收录！', '老班长真是yyds')
      if (gits === 'A炸' || gits === '你妈s了，你全家炸了！' || gits === '360°筷子水泥说' || gits === '虚脱了') {
        var f = document.getElementById('third');
        f.textContent = '四年级的吃鸡大战，五年级的欢笑与回忆';
        var g = document.getElementById('remember-chicken');
        g.textContent = '——回忆:《吃鸡大战》';

        rs.textContent = '"卷王班长（六梗限定版）"';

        setTimeout(function() {
          alert('（第一关回忆已作答。）\n等等...怎么还开始答题了？？？[惊讶doge]');
        }, 450)
      } else {
        alert('老班长：我免费了？？？');
      }
    }
}

function EndThird() {
    var rg = document.getElementById('third');
    var rd = rg.innerText;

    if (rd === '四年级的吃鸡大战，五年级的欢笑与回忆') {
      var gits = prompt('《吃鸡大战》和梗网站都是谁的作品？', '提示：请填笔名')
      if (gits === '爆齐') {
        var f = document.getElementById('theLast');
        f.textContent = '"False：来自610的最后考核"';
        var g = document.getElementById('examine');
        g.textContent = '——{进入虚拟空界}';

        rg.textContent = '"吃鸡大战是由爆齐在2021年画的漫画"'

        setTimeout(function() {
          alert('（第二关回忆已作答。）\n甚么？这都是与回忆610相关的问题吗？[dogeee?]');
        }, 450)
      } else {
        alert('小编：What？？？');
      }
    } else {
      alert('[程序员摆烂第六式]')
    }
}

function EndClassed() {
    var opsOneEx = document.getElementById('ops-one');
    var chickenTwoEx = document.getElementById('third');
    var examThreeEx = document.getElementById('examine');
    var opEX = opsOneEx.innerText;
    var chickenEX = chickenTwoEx.innerText;
    var examEX = examThreeEx.innerText;
    const overlays = document.getElementById('overlay');

    if (opEX === '"卷王班长（六梗限定版）"' && chickenEX === '"吃鸡大战是由爆齐在2021年画的漫画"' && examEX === '——{进入虚拟空界}') {
          setTimeout(function() {
            overlays.style.display = 'block';
            alert('你也来进行最终考核了吗...');
            alert('若是610之子，应该就会以下的问题吧');
            alert('回忆吧，回忆从一年级起始的娱乐！');
            var Class = prompt('1.10班共有__个成员，热情且不同的班级', '作答：数字')
            if (Class === '50' || Class === '五十' || Class === '53' || Class === '五十三' || Class === '52' || Class === '五十二') {
              alert('恭喜通过第一题！');
              var ClassTwo = prompt('2.爆齐共有__本回忆性代表作，最有名的是《吃鸡大战》\n（时间截止：2022年7月前）', '小编：回忆性代表作！')
              if (ClassTwo === '2' || ClassTwo === '两' || ClassTwo === '二') {
                alert('恭喜通过第二题！还差最后一题！');
                var ClassLast = prompt('3.梗网站一共存在几个梗？\n（提示：不是具体数值）', '不是具体数值...?')
                if (ClassLast === '回忆就是无量的' || ClassLast === '10+6*100' || ClassLast === 'x' || ClassLast === '610') {
                  setTimeout(function() {
                    alert('恭喜！三题测试成功！');
                    alert('就算分道扬镳，也要一帆风顺啊...');
                    alert('[悲伤doge]...');
                  }, 400)

                  setTimeout(function() {
                    overlays.style.display = 'none';
                    var ff = document.getElementById('theLast');
                    ff.textContent = '"六年生活，满满的回忆，610梗网站！"';
                    var gh = document.getElementById('examine');
                    gh.textContent = '——爆齐，语数双零赠言';
                    var overlies = document.getElementById('what_six');
                    overlies.textContent = '就算分道扬镳，也要一帆风顺啊...';
                  }, 405)
              } else {
                alert('回答错误，可惜了..仅差一步了啊...');
              }
            } else {
              alert('回答错误，我们将退出终试！');
            }
      } else {
        alert('回答错误，我们将退出终试！');
      }
    }, 450)
    } else if (examEX === '——爆齐，语数双零赠言') {
      alert('这句话在留言net网站应该会置顶的对八？[doge]');
    } else {
      alert('你无法参加梗网站终极考核！');
    }
}
