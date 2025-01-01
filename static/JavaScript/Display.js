function toggleDiv(link) {
  var myDiv = document.getElementById("myDiv");

  if (myDiv.style.display === "block") {
    myDiv.style.display = "none";
    link.innerHTML = "更多";
  } else {
    myDiv.style.display = "block";
    link.innerHTML = "隐藏";
  }
}

function TheMusicConceals() {
    links = document.getElementById('huhu')
    tag = document.getElementById('bars');
    tap = document.getElementById('myDiv');

    if (tag.style.display === "block") {
      tag.style.display = "none";
      tap.style.display = "none";
      links.innerHTML = "启用音乐栏球";
    } else {
      tag.style.display = "block";
      links.innerHTML = "隐藏音乐栏球";
    }
}