// JavaScript for lightbox functionality
const lightboxOverlay = document.getElementById('lightbox-overlay');
const lightboxImage = document.getElementById('lightbox-image');

// Open the lightbox with the specified image
function openLightbox(imageSrc) {
    lightboxImage.src = imageSrc;
    lightboxOverlay.style.display = 'flex';
}

// Close the lightbox and reset the image source
function closeLightbox() {
    lightboxOverlay.style.display = 'none';
    lightboxImage.src = '';
}

// Close lightbox on 'Escape' key press
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeLightbox();
    }
});

// Close lightbox when clicking outside the image
lightboxOverlay.addEventListener('click', function(event) {
    if (event.target === lightboxOverlay) {
        closeLightbox();
    }
});
