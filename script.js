document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    function updateCards() {
        const offset = -currentIndex * 430;
        cards.forEach(card => {
            card.style.transform = `translateX(${offset}%)`;
        });
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
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
     
    updateCards(); // Initial call to set the initial position of the cards
});