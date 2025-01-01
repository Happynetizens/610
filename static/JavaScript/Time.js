function getCurrentTime() {
  var currentTime = new Date().toLocaleString();    // 获取时间
  document.getElementById("time1").innerHTML = "发送时间 : " + currentTime;    // 使用id导入至文本中
  document.getElementById("time2").innerHTML = "发送时间 : " + currentTime;
  document.getElementById("time3").innerHTML = "发送时间 : " + currentTime;
  document.getElementById("time4").innerHTML = "发送时间 : " + currentTime;
  document.getElementById("time5").innerHTML = "发送时间 : " + currentTime;
  document.getElementById("time6").innerHTML = "发送时间 : " + currentTime;
  document.getElementById("time7").innerHTML = "发送时间 : " + currentTime;
  document.getElementById("time8").innerHTML = "发送时间 : " + currentTime;
  document.getElementById("time9").innerHTML = "发送时间 : " + currentTime;
}

// 进入页面时自动加载

window.onload = function() {
    getCurrentTime();
}
