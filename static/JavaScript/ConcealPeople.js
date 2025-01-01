function ConcealText() {
    var link = document.getElementById('meme');
    var linkText = link.innerText;

    if (linkText === '"——耐心小伙在耐心的搞隐藏三梗"') {
      var targetElement = document.getElementById('targetMeme');
      targetElement.textContent = '"《我每天三节课，每节课八小时》"';
      var targetElement = document.getElementById('targetMemePeople');
      targetElement.textContent = '——该梗创造者：关唐羽';
      var NiChaCha = document.getElementById('what_three')
      NiChaCha.textContent = '三个老梗可以召唤神龙吗？[doge]'

      link.textContent = "——该梗创造者：三梗限定，编程老六";

      setTimeout(function() {
        alert('三个老梗可以召唤神龙吗？[doge]');
      }, 450);
    }
  }
