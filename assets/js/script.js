function loco() {
    gsap.registerPlugin(ScrollTrigger);

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

// SERVICE IMAGE ZOOM

document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.photobanner img');

  // Function to zoom in the image on hover
  function zoomIn() {
    this.classList.add('zoomed');
  }

  // Function to zoom out the image on mouse leave
  function zoomOut() {
    this.classList.remove('zoomed');
  }

  // Add event listeners to each image
  images.forEach(image => {
    image.addEventListener('mouseenter', zoomIn);
    image.addEventListener('mouseleave', zoomOut);
  });
});



function loadinganimation() {
    gsap.from("#page1 .text-container", {
        y: 100,
        opacity: 0,
        delay: 0.5,
        duration: 0.9,
        stagger: 0.3,
    });
    gsap.from("#page1 .girl-image", {
        scale: 0.9,
        opacity: 0,
        delay: 0.5,
        duration: 0.9,
    });
}
loadinganimation();

function cursorShape() {
  // Create a custom cursor element
  const customCursor = document.createElement('div');
  customCursor.classList.add('custom-cursor');
  document.body.appendChild(customCursor);
  
  // Function to update cursor position within the boundaries of the book card
  function updateCursorPosition(event) {
    const bookCardRect = event.currentTarget.getBoundingClientRect();
    const cursorSize = 30; // Adjust this value if you change the cursor size in CSS
  
    let x = event.clientX - bookCardRect.left - cursorSize / 2;
    let y = event.clientY - bookCardRect.top - cursorSize / 2;
  
    // Constrain the cursor within the book card boundaries
    x = Math.max(0, Math.min(x, bookCardRect.width - cursorSize));
    y = Math.max(0, Math.min(y, bookCardRect.height - cursorSize));
  
    customCursor.style.left = `${bookCardRect.left + x}px`;
    customCursor.style.top = `${bookCardRect.top + y}px`;
  }
  
  // Function to show cursor with zoom-in effect
  function showCustomCursor() {
    customCursor.classList.add('zoom-in');
  }
  
  // Function to hide cursor with zoom-out effect
  function hideCustomCursor() {
    customCursor.classList.remove('zoom-in');
  }
  
  // Add event listeners for all book-card elements
  document.querySelectorAll('.book-card').forEach(bookCard => {
    bookCard.addEventListener('mouseenter', showCustomCursor);
    bookCard.addEventListener('mouseleave', hideCustomCursor);
    bookCard.addEventListener('mousemove', updateCursorPosition);
  });
}
cursorShape();

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function applyRandomShake(element) {
  const randomX1 = `${getRandomInt(-20, 20)}px`;
  const randomY1 = `${getRandomInt(-20, 20)}px`;
  const randomX2 = `${getRandomInt(-20, 20)}px`;
  const randomY2 = `${getRandomInt(-20, 20)}px`;
  const randomX3 = `${getRandomInt(-20, 20)}px`;
  const randomY3 = `${getRandomInt(-20, 20)}px`;

  element.style.setProperty('--randomX1', randomX1);
  element.style.setProperty('--randomY1', randomY1);
  element.style.setProperty('--randomX2', randomX2);
  element.style.setProperty('--randomY2', randomY2);
  element.style.setProperty('--randomX3', randomX3);
  element.style.setProperty('--randomY3', randomY3);
}

document.querySelectorAll('.feedback-user').forEach(element => {
  applyRandomShake(element);
  setInterval(() => applyRandomShake(element), 5000); // Change values every 5 seconds
});



const heroImage = document.querySelector('#page1');
const girlImage = document.querySelector('.girl-image');

// Function to update the position of the girl image based on mouse movement
function updateImagePosition(event) {
  const { offsetWidth: width, offsetHeight: height } = heroImage;
  const { offsetX: mouseX, offsetY: mouseY } = event;

  const moveX = (mouseX / width - 0.5) * 2 * -1; // Calculate horizontal movement
  const moveY = (mouseY / height - 0.5) * 2 * -1; // Calculate vertical movement

  const translateX = moveX * 10; // Adjust multiplier for desired effect intensity
  const translateY = moveY * 10; // Adjust multiplier for desired effect intensity

  girlImage.style.transform = `translate(${translateX}px, ${translateY}px)`;
}

// Add mousemove event listener to the hero image container
heroImage.addEventListener('mousemove', updateImagePosition);

