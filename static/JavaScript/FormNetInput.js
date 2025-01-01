function checkInput() {
  // 获取输入框的值
  var input = document.getElementById('input').value.trim();

  // 判断输入是否为中文且不超过五个字
  if (/^[\u4e00-\u9fa5]{1,5}$/.test(input)) {
    alert('提交成功啦！610的程序员会收到你的留言哦！');
  } else {
    alert('名称请输入中文，不能超过五个字！');
  }
}