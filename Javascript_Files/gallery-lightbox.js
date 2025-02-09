document.addEventListener('DOMContentLoaded', function() {
    const lightboxOverlay = document.getElementById('lightbox-overlay');
    const lightboxImage = document.getElementById('lightbox-image');

    // Function to open the lightbox
    window.openLightbox = function(imageSrc) {
        lightboxImage.src = imageSrc;
        lightboxOverlay.style.display = 'flex';
    }

    // Function to close the lightbox
    window.closeLightbox = function() {
        lightboxOverlay.style.display = 'none';
    }

    // Close lightbox when clicking outside the image
    if (lightboxOverlay) {
        lightboxOverlay.addEventListener('click', function(e) {
            if (e.target === lightboxOverlay) {
                closeLightbox();
            }
        });
    }
});
