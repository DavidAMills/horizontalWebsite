const container = document.querySelector('.container');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const teslaCar = document.getElementById('tesla'); // Get the Tesla car element
let currentPage = 0;

// Function to add stretch effect in the correct direction
function addStretchEffect(direction) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('stretch-left', 'stretch-right'); // Reset previous stretches
        if (direction === 'left') {
            page.classList.add('stretch-left'); // Stretch to the left (next page)
        } else if (direction === 'right') {
            page.classList.add('stretch-right'); // Stretch to the right (previous page)
        }
    });
}

// Function to remove the stretch effect after the transition
function removeStretchEffect() {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('stretch-left', 'stretch-right'); // Reset stretch
    });
}

// Function to reset the zoom classes after animation completes
function resetZoomClasses() {
    teslaCar.classList.remove('slide-out', 'slide-in');
}

function nextPage() {
    if (currentPage < 3) {
        addStretchEffect('left'); // Trigger stretch to the left
        teslaCar.classList.add('slide-out-right'); // Slide out to the right

        // Move to the next page after the stretch and slide-out
        setTimeout(() => {
            currentPage++;
            updatePage(); // Move to the next page
            removeStretchEffect(); // Remove the stretch effect
        }, 350);

        // Slide in from the left
        setTimeout(() => {
            teslaCar.classList.remove('slide-out-right');
            teslaCar.classList.add('slide-in-left'); // Start slide-in animation from the left
        }, 700);

        // Reset classes after animations complete
        setTimeout(() => {
            teslaCar.classList.remove('slide-in-left'); // Ensure we remove the slide-in class so the button works again
        }, 1500);
    }
}

function prevPage() {
    if (currentPage > 0) {
        addStretchEffect('right'); // Trigger stretch to the right
        teslaCar.classList.add('slide-out-left'); // Slide out to the left

        // Move to the previous page after the stretch and slide-out
        setTimeout(() => {
            currentPage--;
            updatePage(); // Move to the previous page
            removeStretchEffect(); // Remove the stretch effect
        }, 350);

        // Slide in from the right
        setTimeout(() => {
            teslaCar.classList.remove('slide-out-left');
            teslaCar.classList.add('slide-in-right'); // Start slide-in animation from the right
        }, 700);

        // Reset classes after animations complete
        setTimeout(() => {
            teslaCar.classList.remove('slide-in-right'); // Ensure we remove the slide-in class so the button works again
        }, 1500);
    }
}

// Function to update the page position
function updatePage() {
    container.style.transform = `translateX(-${currentPage * 100}vw)`;
}

// Event Listeners
nextBtn.addEventListener('click', nextPage);
prevBtn.addEventListener('click', prevPage);
