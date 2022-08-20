const getHeader = document.getElementById("header");
const logo = document.getElementById("logo");

function scrollFunction(){
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        getHeader.style.height = "75px";
        getHeader.style.transition = ".3s ease-in-out";
        logo.style.width = "5em";
      } else {
        getHeader.style.height = "150px";
        getHeader.style.transition = ".3s ease-in-out";
        logo.style.width = "8em";
        logo.style.transition = ".3s ease-in-out";
      }
}

window.onscroll = function() {scrollFunction()};