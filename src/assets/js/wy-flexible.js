/* eslint-disable */
(function(e) {
  var g = 1080;
  var b = 100;
  var ww = e.innerWidth;
  var isIpad = !!(
    navigator.userAgent.toLocaleLowerCase().indexOf("ipad") > -1
  );
  if (ww > 500 && !isIpad) {
    ww = 750;
  }
  var f = e.document.createElement("div");
  f.style.width = "1rem";
  f.style.display = "none";
  var h = e.document.getElementsByTagName("head")[0];
  h.appendChild(f);
  var a = parseFloat(
    e.getComputedStyle(f, null).getPropertyValue("width")
  );
  f.remove();
  document.documentElement.style.fontSize =
    (((ww / g) * b) / a) * 100 + "%";
  var j = document.createElement("style");
  var i =
    "@media screen and (min-width: " +
    ww +
    "px) {html{font-size:" +
    (ww / (g / b) / a) * 100 +
    "%;}}";
  var c =
    "@media screen and (min-width: " +
    e.innerHeight +
    "px) {html{font-size:" +
    (e.innerHeight / (g / b) / a) * 100 +
    "%;}}";
  j.innerHTML = i + c;
  h.appendChild(j);
  return a;
})(window);

// 改进后的事件监听
window.onload = function() {
  document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
      event.preventDefault()
    }
  }, {
    passive: false // 关闭被动监听
  })

  var lastTouchEnd = 0
  document.addEventListener('touchend', function(event) {
    var now = (new Date()).getTime()
    if (now - lastTouchEnd <= 300) {
      event.preventDefault()
    }
    lastTouchEnd = now
  }, false)

  // 阻止双指放大
  document.addEventListener('gesturestart', function(event) {
    event.preventDefault()
  })
}
