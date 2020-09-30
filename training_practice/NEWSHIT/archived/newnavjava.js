// navSlider JAVASCRIPT FOR LOGO AND SCROLLING BAR
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navSlider").style.top = "0";
    document.getElementById("logoHidden").id = "logoSlider"
  } else {
    document.getElementById("navSlider").style.top = "-300px";
    document.getElementById("logoSlider").id = "logoHidden"
  }
}


// CHANGE COLOR OVER SCROLLING EVENTS

var statusBox = document.getElementById("statusBox");
var statusText = document.getElementById("statusText");

function handler(entries, observer) {
  for (entry of entries) {
    console.log(entry);

    statusText.textContent = entry.isIntersecting;

    if (entry.isIntersecting) {
      statusBox.className = "yes";
    } else {
      statusBox.className = "no";
    }
  }
}

/* By default, invokes the handler whenever:
   1. Any part of the target enters the viewport
   2. The last part of the target leaves the viewport */

let observer = new IntersectionObserver(handler);
observer.observe(document.getElementById("target"));
