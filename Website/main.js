var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navi").style.top = "0";
  } else {
    document.getElementById("navi").style.top = "-66px";
  }
  prevScrollpos = currentScrollPos;
}
