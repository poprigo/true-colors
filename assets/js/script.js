document.addEventListener('DOMContentLoaded', function() {
  showLoader();

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

  const images = document.querySelectorAll('.photobanner img');

  function zoomIn() {
      this.classList.add('zoomed');
  }

  function zoomOut() {
      this.classList.remove('zoomed');
  }

  images.forEach(image => {
      image.addEventListener('mouseenter', zoomIn);
      image.addEventListener('mouseleave', zoomOut);
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
      const customCursor = document.createElement('div');
      customCursor.classList.add('custom-cursor');
      document.body.appendChild(customCursor);

      function updateCursorPosition(event) {
          const bookCardRect = event.currentTarget.getBoundingClientRect();
          const cursorSize = 30;

          let x = event.clientX - bookCardRect.left - cursorSize / 2;
          let y = event.clientY - bookCardRect.top - cursorSize / 2;

          x = Math.max(0, Math.min(x, bookCardRect.width - cursorSize));
          y = Math.max(0, Math.min(y, bookCardRect.height - cursorSize));

          customCursor.style.left = `${bookCardRect.left + x}px`;
          customCursor.style.top = `${bookCardRect.top + y}px`;
      }

      function showCustomCursor() {
          customCursor.classList.add('zoom-in');
      }

      function hideCustomCursor() {
          customCursor.classList.remove('zoom-in');
      }

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
      setInterval(() => applyRandomShake(element), 5000);
  });

  const heroImage = document.querySelector('#page1');
  const girlImage = document.querySelector('.girl-image');

  function updateImagePosition(event) {
      const { offsetWidth: width, offsetHeight: height } = heroImage;
      const { offsetX: mouseX, offsetY: mouseY } = event;

      const moveX = (mouseX / width - 0.5) * 2 * -1;
      const moveY = (mouseY / height - 0.5) * 2 * -1;

      const translateX = moveX * 10;
      const translateY = moveY * 10;

      girlImage.style.transform = `translate(${translateX}px, ${translateY}px)`;
  }

  heroImage.addEventListener('mousemove', updateImagePosition);

  hideLoader();
});

function showLoader() {
  document.getElementById('loader').style.display = 'block';
  document.getElementById('main').style.display = 'none';
}

function hideLoader() {
  document.getElementById('loader').style.display = 'none';
  document.getElementById('main').style.display = 'flex';
}
