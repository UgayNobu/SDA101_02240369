// Function to append current date-time to the page
function appendDateTime() {
    const content = document.getElementById('content');
    const entry = document.createElement('div');
    entry.classList.add('entry');
    
    const currentDateTime = new Date().toLocaleString();
    entry.textContent = 'Appended at: ' + currentDateTime;

    content.appendChild(entry);
}

// Function to detect if we are near the bottom of the page
function isNearBottom() {
    const scrollPosition = window.scrollY + window.innerHeight;
    const threshold = document.body.offsetHeight - 100;  // 100px from the bottom
    return scrollPosition >= threshold;
}

// Scroll event listener to trigger append when near the bottom
window.addEventListener('scroll', function() {
    if (isNearBottom()) {
        appendDateTime();
    }
});

// Initial content padding to allow scrolling
for (let i = 0; i < 10; i++) {
    appendDateTime();
}