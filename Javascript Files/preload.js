// preload.js

// Preload images
const preloadImages = (imageUrls) => {
    const promises = imageUrls.map(url => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = () => resolve(url);
            img.onerror = () => reject(url);
        });
    });

    return Promise.all(promises);
};

// Add loaded class to hero images
const addLoadedClass = () => {
    const heroImages = document.querySelectorAll('.hero-image');
    heroImages.forEach((image) => {
        image.classList.add('loaded');
    });
};

// List of images to preload
const imageUrls = [
    '/Images/Autosave011.jpg',
    // Add other images you want to preload here
];

// Preload images and add loaded class when done
window.addEventListener('load', () => {
    preloadImages(imageUrls)
        .then(() => {
            addLoadedClass();
        })
        .catch((error) => {
            console.error(`Failed to preload image: ${error}`);
        });
});
