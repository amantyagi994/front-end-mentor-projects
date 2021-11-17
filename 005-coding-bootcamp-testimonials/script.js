const testimonials = document.querySelectorAll('.testimonial');
const images = document.querySelectorAll('.photo');
const arrowPrev = document.querySelector('#arrowPrev');
const arrowNext = document.querySelector('#arrowNext');
let currentActive = 0, length;

if (testimonials.length == images.length) {
  totalLength = images.length;
}

function reset() {
  for (let i = 0; i < totalLength; i++) {
    testimonials[i].style.opacity = '0';
    images[i].style.opacity = '0';
  }
}

// slider initializer

function init() {
  reset();
  testimonials[0].style.opacity = '1';
  images[0].style.opacity = '1';
}

// show previous

function goPrev() {
  reset();
  testimonials[currentActive - 1].style.opacity = '1';
  images[currentActive - 1].style.opacity = '1';
  currentActive--;
}

arrowPrev.addEventListener('click', function () {
  if (currentActive === 0) {
    currentActive = totalLength;
  }

  goPrev();
});

// show next

function goNext() {
  reset();
  testimonials[currentActive + 1].style.opacity = '1';
  images[currentActive + 1].style.opacity = '1';
  currentActive++;
}

arrowNext.addEventListener('click', function () {
  if (currentActive === totalLength - 1) {
    currentActive = -1;
  }

  goNext();
});



init();