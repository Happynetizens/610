function ConcealFourText() {
    var link = document.getElementById('targetMemePeople');
    var linkText = link.innerText;
    var pwd = prompt('四梗特有的密码哦！', '输入密码以开启四梗')

    if (linkText === '——该梗创造者：关唐羽') {
      if (pwd === '52xin') {
      var targetElement = document.getElementById('targetFour');
      targetElement.textContent = '"江南无所有，聊赠一枝春"';
      var targetElement = document.getElementById('targetFourPeople');
      targetElement.textContent = '——该梗创造者：线段→涂辰心';
      var love = document.getElementById('what_four')
      love.textContent = '《这 个 梗 可 不 能 被 某 人 看 到 了！！》'

        setTimeout(function() {
          alert('《四 逝 同 堂！~》《这 个 梗 可 不 能 被 某 人 看 到 了！！》');
        }, 450);
      } else {
        alert('巅峰迎来虚假的密码，黄昏见证真诚的信徒！（问某人去，老爆齐和某陽不知')
      }
    } else {
      alert('四梗暂不开放！先把前面的解锁啦！')
    }
  }
