document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const textBlocks = document.querySelectorAll('.text-content');


    let currentIndex = 0;

    function showCard(index) {
        cards.forEach((card, i) => {
        card.classList.toggle('active', i === index);
        });
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        showCard(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % cards.length;
        showCard(currentIndex);
    });

    textBlocks.forEach(block => {
        const header = block.querySelector('h4');
        header.addEventListener('click', () => {
            block.classList.toggle('active');
        });
    });

    // Show the first card initially
    showCard(currentIndex);
});