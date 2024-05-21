
    var x = 0;
    function menu() {
      if (x == 0) {
        document.getElementById("navbar").style.transform =
          "translateX(100%)";
        x = 1;
      } else {
        document.getElementById("navbar").style.transform = "translateX(0)";
        x = 0;
      }
    }
    function closeNavMenu() {
      document.getElementById("navbar").style.transform = "translateX(0)";
    }
// https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.js
// https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/gsap.min.js
// https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/ScrollTrigger.min.js

