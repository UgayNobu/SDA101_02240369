// Function to check if the element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= window.innerHeight && rect.bottom >= 0
    );
}

// Function to load the real image
function loadRealImage(image) {
    if (image.dataset.src && !image.dataset.loaded) {
        image.src = image.dataset.src;
        image.dataset.loaded = true;  // Mark as loaded to avoid reloading
    }
}

// Function to preload images that are one screen below the viewport
function preloadNextImages() {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(image => {
        const rect = image.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 2) {  // Preload one screen below
            loadRealImage(image);
        }
    });
}

// Function to lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(image => {
        if (isInViewport(image)) {
            loadRealImage(image);
        }
    });
    preloadNextImages();  // Preload images just outside the viewport
}

// Initial check when the page loads
window.addEventListener('DOMContentLoaded', () => {
    lazyLoadImages();
});

// On scroll, check and load images in the viewport
window.addEventListener('scroll', () => {
    lazyLoadImages();
});

// On resize, re-check the viewport for images to load
window.addEventListener('resize', () => {
    lazyLoadImages();
});
