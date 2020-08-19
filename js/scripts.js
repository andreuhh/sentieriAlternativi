//Create function to select elements
//const selectElement = (element) => document.querySelector(element);
//Open and close nav on click
const selectElement = document.querySelector('.menu-icons');
const navig = document.getElementById('nav');

selectElement.addEventListener('click', () => {
    navig.classList.toggle('active');
});

//selectElement('.menu-icons'), addEventListener('click', () => {
//    selectElement('nav').classList.toggle('active');
//});


// script scroll
document.addEventListener('DOMContentLoaded', function () {
    const easeFunctions = {
        easeInQuad: function (t, b, c, d) {
            t /= d;
            return c * t * t + b;
        },
        easeOutQuad: function (t, b, c, d) {
            t /= d;
            return -c * t * (t - 2) + b;
        }
    }
    const moveTo = new MoveTo({
        ease: 'easeInQuad'
    }, easeFunctions);
    const triggers = document.getElementsByClassName('js-trigger');
    for (var i = 0; i < triggers.length; i++) {
        moveTo.registerTrigger(triggers[i]);
    }
});

// Categorie
/*const panels = document.querySelectorAll('.panel');

    function toggleOpen() {
      this.classList.toggle('open');
    }

    function toggleActive(e) {
      if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
      }
    }

    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
   panels.forEach(panel => panel.addEventListener('transitionend', toggleActive)); */

   /**Carousel */

   const prev  = document.querySelector('.prev');
const next = document.querySelector('.next');

const track = document.querySelector('.track');

let carouselWidth = document.querySelector('.carousel-container').offsetWidth;

window.addEventListener('resize', () => {
    carouselWidth = document.querySelector('.carousel-container').offsetWidth;
})

let index = 0;

next.addEventListener('click', () => {
    index++;
    prev.classList.add('show');
    track.style.transform = `translateX(-${index * carouselWidth}px)`;

   if(track.offsetWidth - (index * carouselWidth) < carouselWidth) {
       next.classList.add('hide');
   }
});

prev.addEventListener('click', () => {
    index--;
    next.classList.remove('hide');
    if(index === 0) {
        prev.classList.remove('show');
    }
    track.style.transform = `translateX(-${index * carouselWidth}px)`;
});