// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Get all images with the class "clickable-image"
    var clickableImages = document.querySelectorAll(".img-fluid");

    // Attach a click event listener to each image
    clickableImages.forEach(function(image) {
        image.addEventListener("click", function() {
            // Open a new window and load the clicked image in it
            var newWindow = window.open();
            newWindow.document.write("<html><head><title>Image Preview</title><style>body { display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; } img { max-width: 100%; max-height: 100%; }</style></head><body><img src='" + image.src + "' alt='" + image.alt + "'></body></html>");
        });
    });
});
