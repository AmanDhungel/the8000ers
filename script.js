document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('#cards .card');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const topButton = document.querySelector('.top');
    const botButton = document.querySelector('.bot');
    let currentIndex = 0;

    function updateCards() {
        const offset = -currentIndex * 368 ;
        cards.forEach(card => {
            card.style.transform = `translateX(${offset}%)`;
        });
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > -1) {
            currentIndex--;
            updateCards();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < cards.length - 1 && currentIndex < 1) {
            currentIndex++;
            updateCards();
        }
        console.log(currentIndex);
    });



    function updateresponsiveCards() {
        const offset = -currentIndex * 308 ;
        cards.forEach(card => {
            card.style.transform = `translateY(${offset}%)`;
        });
    }

    topButton.addEventListener('click', () => {
        if (currentIndex > -1) {
            currentIndex--;
            updateresponsiveCards();
        }
    });

    botButton.addEventListener('click', () => {
        if (currentIndex < cards.length - 1 && currentIndex < 1) {
            currentIndex++;
            updateresponsiveCards();
        }
        console.log(currentIndex);
    });

    updateresponsiveCards()
     
    updateCards(); // Initial call to set the initial position of the cards
});




const gap = 16;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));


