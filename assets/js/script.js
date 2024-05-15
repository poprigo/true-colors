function loco() {
    gsap.registerPlugin(ScrollTrigger);
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}

loco();

VanillaTilt.init(document.querySelector('.girl-image'), {
    max: 10,
    speed: 100
});

function loadinganimation() {
    gsap.from("#page1 h1", {
        y: 100,
        opacity: 0,
        delay: 0.5,
        duration: 0.9,
        stagger: 0.3,
    });
    gsap.from("#page1 .t-description", {
        y: 100,
        opacity: 0,
        delay: 1.5,
        duration: 0.9,
        stagger: 0.3,
    });
    gsap.from("#page1 .buttons-container", {
        y: 100,
        opacity: 0,
        delay: 2,
        duration: 0.9,
        stagger: 0.3,
    });

    gsap.from("#page1 .community-container", {
        y: 100,
        opacity: 0,
        delay: 2.5,
        duration: 0.9,
        stagger: 0.3,
    });
    gsap.from("#page1 .girl-image", {
        scale: 0.9,
        opacity: 0,
        delay: 1.3,
        duration: 0.5,
    });
}
loadinganimation();

// function cursorAnimation() {
//     document.addEventListener("mousemove", function (dets) {
//       gsap.to("#cursor", {
//         left: dets.x,
//         top: dets.y,
//       });
//     });
    
//     document.querySelectorAll(".book-card").forEach(function (elem) {
//       elem.addEventListener("mouseenter", function () {
//         gsap.to("#cursor", {
//           transform: "translate(-50%,-50%) scale(1)",
//         });
//       });
//       elem.addEventListener("mouseleave", function () {
//         gsap.to("#cursor", {
//           transform: "translate(-50%,-50%) scale(0)",
//         });
//       });
//     });
//   }
//   cursorAnimation();
