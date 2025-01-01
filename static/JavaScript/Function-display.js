const link = document.getElementById('looking');
const element = document.getElementById('renew_display');
const overlays = document.getElementById('overlay');
const btn = document.getElementById('conceal-btn');
const notices = document.getElementById('notice');
var notice = document.getElementById('renew-notice');
var noticed = document.getElementById('notice-s');
var loader = document.getElementById('loading');

link.addEventListener('click', function() {
  element.style.display = 'block';
  overlays.style.display = 'block';
  btn.style.display = 'block';
  loader.style.display = 'block';
    setTimeout(function() {
      loader.style.display = 'none';
    }, 1200);
    setTimeout(function() {
      notice.style.display = 'block';
    }, 1900);
    setTimeout(function() {
      notices.style.display = 'block';
    }, 1900);
    setTimeout(function() {
      noticed.style.display = 'block';
    }, 1900);
});

btn.addEventListener('click', function() {
  element.style.display = 'none';
  overlays.style.display = 'none';
  btn.style.display = 'none';
  notice.style.display = 'none';
  notices.style.display = 'none';
  noticed.style.display = 'none';
});
