function copyToClipboard(text) {
    var tempInput = document.createElement("input"); // 创建一个临时的input元素
    tempInput.setAttribute("value", text); // 设置input元素的值为要复制的文本内容
    document.body.appendChild(tempInput); // 将input元素添加到DOM树中
    tempInput.select(); // 选中input元素中的所有文本内容
    document.execCommand("copy"); // 执行拷贝操作
    document.body.removeChild(tempInput); // 将临时创建的input元素从DOM树中移除掉
  }