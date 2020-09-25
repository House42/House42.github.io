// navSlider JAVASCRIPT FOR LOGO AND SCROLLING BAR
window.onscroll = function() {scrollFunction()};

const scrollFunction = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navSlider").style.top = "0";
    document.getElementById("logoHidden").id = "logoSlider"
  } else {
    document.getElementById("navSlider").style.top = "-300px";
    document.getElementById("logoSlider").id = "logoHidden"
  }
}

// ALL OBSERVER FUNCTIONING BELOW


// LINE THROUGH VIEWED BLOG

// GLOWING CURRENT BLOG

// LAZY LOADING

// LOGO CHANGING
let sections = document.querySelectorAll('div.blog');
const logoAppear = () => {
  let currentLogo = document.querySelector("#logoSlider");
  currentLogo.classList.add("logoChangeAfter");
  currentLogo.classList.remove("logoChangeBefore");
}
const logoDisppear = () => {
  let currentLogo = document.querySelector("#logoSlider");
  currentLogo.classList.add("logoChangeBefore");
  currentLogo.classList.remove("logoChangeAfter");
}
const changeLogo = () => {
let currentLogo = document.querySelector("#logoSlider");
currentLogo.classList.add("logoChangeBefore");
do {
  x = Math.floor((Math.random() * 7) + 1);
  i = 1;
} while (i == x);
  // let url = 'file:///C:/Users/tina_/source/repos/House42/images/logo/';
  let url = 'C:/Users/user/Documents/Internet of Things/He Koi/images/logo/';
  let src = 'logo.png';
  let newLogo = url + x + src;
  currentLogo.src = newLogo;
}

// OBSERVER EVENTS OVER BLOG:
let observer = new IntersectionObserver(function (entries, self) {
  entries.forEach(entry => {
    console.log(entry);
    if (entry.isIntersecting) {  
        logoDisppear();  
        setTimeout(changeLogo,500);
        setTimeout(logoAppear,500);
    }
  });
});
sections.forEach(section => {
  observer.observe(section);
});
