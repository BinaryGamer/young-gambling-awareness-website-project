var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navi").style.top = "0";
  } else if (currentScrollPos < 80) {
    document.getElementById("navi").style.top = "0";
  } else {
    document.getElementById("navi").style.top = "-66px";
  }
  prevScrollpos = currentScrollPos;
}

function toggleFocusOne(self) {
   self.target.classList.toggle('focus');
}

document.getElementById("imageOne").onmouseover = toggleFocusOne;
document.getElementById("imageOne").onmouseleave = toggleFocusOne;

document.getElementById("imageTwo").onmouseover = toggleFocusOne;
document.getElementById("imageTwo").onmouseleave = toggleFocusOne;
