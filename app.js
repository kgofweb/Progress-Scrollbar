// DOM element
let body = document.querySelector('body');
let scrollBar = document.querySelector('.scroll');

// Get height of body
let bodyHeight = body.offsetHeight;

// Scroll listener
window.addEventListener('scroll', handleScroll);

function handleScroll() {
   // Number of pixels on scroll
   let scroll = window.scrollY / (bodyHeight - window.innerHeight);

   // Get percentage
   let scrollPercent = Math.round(scroll * 100);

   // Set width of scrollBar
   scrollBar.style.width = scrollPercent + '%';
   scrollBar.style.transition = 'width .5s ease-in-out';
}

// ES6
window.addEventListener('scroll', () => {
   // Number of pixels on scroll
   let scroll = window.scrollY / (bodyHeight - window.innerHeight);

   // Get percentage
   let scrollPercent = Math.round(scroll * 100);

   // Set width of scrollBar
   scrollBar.style.width = `${scrollPercent}%`;
   scrollBar.style.transition = 'width .5s ease-in-out'; 
});



// Pourcentage scroller sur le document
// console.log(scrollY / bodyHeight);

// Remove le innerHeight qui represente la scroll bar et elle represente le viewport
// window.innerHeight

// console.log(window.innerHeight);

// Arrondir le calcul