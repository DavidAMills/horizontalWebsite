const container = document.querySelector('.container');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
let currentPage = 0;

// Swipe functionality for touch devices
let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
}

function handleTouchEnd(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}

function handleSwipe() {
    if (touchEndX < touchStartX) {
        nextPage();
    }
    if (touchEndX > touchStartX) {
        prevPage();
    }
}

// Functions to navigate between pages
function nextPage() {
    if (currentPage < 3) {
        currentPage++;
        updatePage();
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        updatePage();
    }
}

function updatePage() {
    container.style.transform = `translateX(-${currentPage * 100}vw)`;
}

// Event Listeners
nextBtn.addEventListener('click', nextPage);
prevBtn.addEventListener('click', prevPage);
container.addEventListener('touchstart', handleTouchStart, false);
container.addEventListener('touchend', handleTouchEnd, false);
