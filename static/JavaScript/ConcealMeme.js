function thb() {
    var vb = document.getElementById('inWar');
    var vg = vb.innerText;

    if (vg === '"金色的沙滩，金色的稻田，金色的金字塔"') {
      var memed = document.getElementById('ThreeHeadBrother')
      memed.textContent = '"在Y星上看风景，多是一件美逝啊~"';
      vb.textContent = "'金色的沙滩，金色的稻田，金色的金字塔'"

      setTimeout(function() {
        alert('Y星的风景，还不错呢（哪里来的野生赛亚人！！）');
      }, 450);
    } else {
      alert('三头哥：害羞羞，这两个空看过吃鸡大战的都会填！[doge]')
    }
}

function Conceal() {
    var link = document.getElementById('ThreeHeadBrother');
    var linkText = link.innerText;

    if (linkText === '"在Y星上看风景，多是一件美逝啊~"') {
      var targetElement = document.getElementById('targetText');
      targetElement.textContent = '"没了火箭，怎么回鸡星？"';
      var targetElement = document.getElementById('targetPeople');
      targetElement.textContent = '——该梗创造者：三头哥';
      var targetElement = document.getElementById('meme');
      targetElement.textContent = '"——耐心小伙在耐心的搞隐藏三梗"'
      var GGs = document.getElementById('what_two')
      GGs.textContent = '不！铁大刀！没有你我怎么活啊！'

      link.textContent = '"没了火箭，怎么回鸡星？自求多福吧！"'

      setTimeout(function() {
        alert('不！铁大刀！没有你我怎么活啊！（开形态两秒半干掉boss）');
      }, 450);
    } else {
      alert('你是跟五梗同款的嘛？哈哈！')
    }
  }