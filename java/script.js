// THIS IS A TEST FOR UPDATING THE BRANCH OF A NEW FEATURE ON GIT HUB

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
const logoDisppear = () => {
  let currentLogo = document.querySelector("div.logoSlider img");
  currentLogo.classList.add("logoChangeBefore");
  currentLogo.classList.remove("logoChangeAfter");
}
// NAVBAR HIDDEN ON FIRST SCROLL THEN APPEARS ON WAY UP
// LOGO APPEARS ON SCROLL
let prevScrollpos = window.pageYOffset;
window.onscroll = scrollFunction = () => {
  let currentScrollPos = window.pageYOffset;
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      if (prevScrollpos < currentScrollPos){
        document.getElementById("navSlider").style.top = "-300px";
      } else {
      document.getElementById("navSlider").style.top = "0";
      }
    prevScrollpos = currentScrollPos;
  }
  else {
    document.getElementById("navSlider").style.top = "-300px";
    document.getElementById("logoHidden").id = "logoSlider";
  }
}

// let prevScrollpos = window.pageYOffset;
// window.onscroll = scrollFunction = () => {
//   let currentScrollPos = window.pageYOffset;
//   let logo = document.querySelector("div.logoSlider img");
//   let navSlider = document.querySelector("div.navSlider");
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//       if (prevScrollpos < currentScrollPos){
//         navSlider.style.top = "-300px";
//       } else {
//       navSlider.style.top = "0";
//       }
//     prevScrollpos = currentScrollPos;
//   }
//   else {
//     navSlider.style.top = "-300px";
//     logo.id = "logoHidden";
//     logoDisappear();
//   }
// }
// ===========================================================================
// ADDING CLASS TO TOP NAV BAR LINKS
// ===========================================================================
let anchy = document.querySelectorAll("div.scrollBar ul li a");
let slidingAnchy = document.querySelectorAll("div.topBarLinks ul li a");
for(var i = 0; i < anchy.length; i++){
    anchy[i].className = anchy[i].className += " hvr-overline-from-center";
    slidingAnchy[i].className = anchy[i].className += " hvr-overline-from-center";
}
// ALL OBSERVER FUNCTIONING BELOW


// LINE THROUGH VIEWED BLOG

// ===========================================================================
// GLOWING CURRENT BLOG
// ===========================================================================

// ===========================================================================
// LAZY LOADING IMAGES FOR BLOGS
// ===========================================================================
// const sections = document.querySelectorAll('div.blog');
// let blogImages = (blogId) => {
//   let image = blogId.querySelectorAll("img");
  
// }
const targets = document.querySelectorAll("[data-src]");
const lazyLoad = target => {
  const io = new IntersectionObserver((entries, observer) => {
    // console.log("image" + entries)
    entries.forEach(entry => {
      // console.log('😍');
      entry.target.style.opacity = "0";
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-src');
        img.setAttribute('src', src);
        img.classList.add('fadeIn');
        observer.disconnect();
      }
    });
  });
  io.observe(target)
};
targets.forEach(lazyLoad);
// ===========================================================================
// LOGO CHANGING
// ===========================================================================
const sections = document.querySelectorAll('div.blog');
const logoAppear = () => {
  let currentLogo = document.querySelector("div.logoSlider img");
  currentLogo.classList.add("logoChangeAfter");
  currentLogo.classList.remove("logoChangeBefore");
}

const changeLogo = () => {
let currentLogo = document.querySelector("div.logoSlider img");
currentLogo.classList.add("logoChangeBefore");
do {
  x = Math.floor((Math.random() * 7) + 1);
  i = 1;
} while (i == x);
  let url = '../images/logo/';
  let src = 'logo.png';
  let newLogo = url + x + src;
  currentLogo.src = newLogo;
}
// ===========================================================================
// OBSERVER BLOG EVENTS:
// ===========================================================================
const config = {
  root: null,
  rootMargin: '0px',
  threshold: 0
};
let observer = new IntersectionObserver(function (entries, self) {
  entries.forEach(entry => {
    console.log(entry);
    if (entry.isIntersecting) { 
        console.log("blog" + entry + entry.target);
        logoDisppear();  
        setTimeout(changeLogo,500);
        setTimeout(logoAppear,500);
    }
  });
}, config);
sections.forEach(section => {
  observer.observe(section);
});