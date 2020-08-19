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
const panels = document.querySelectorAll('.panel');

    function toggleOpen() {
      this.classList.toggle('open');
    }

    function toggleActive(e) {
      if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
      }
    }

    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
   panels.forEach(panel => panel.addEventListener('transitionend', toggleActive)); 