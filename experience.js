let hideImageTimeout;
const hoverContainer = document.querySelector('.hoverContainer');
function moveImage(event) {
    const floatingImage = document.getElementById('floatingImage');

    // Clear any previous timeout to prevent premature hiding
    clearTimeout(hideImageTimeout);

    // Get the boundaries of the container
    const containerRect = hoverContainer.getBoundingClientRect();

    // Set the position of the image relative to the mouse
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    floatingImage.style.left = mouseX + 'px';
    floatingImage.style.top = mouseY + 'px';

    console.log(mouseY,containerRect.bottom);
    // Check if the mouse is outside the container boundaries
    if (
        mouseX <= containerRect.left + 3 ||
        mouseX >= containerRect.right - 3 ||
        mouseY <= containerRect.top + 5||
        mouseY >= containerRect.bottom - 20
        
    ) {
        // Mouse is outside the container, hide the image
        hideImage();
    } else {
        // Mouse is inside the container, make the image visible
        floatingImage.style.display = 'block';
    }
}

function hideImage() {
    
    const floatingImage = document.getElementById('floatingImage');

    // Delay hiding the image slightly
        floatingImage.style.display = 'none';
}

hoverContainer.addEventListener('mousemove', moveImage);


document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "ArrowUp":
            window.location.href = 'index.html';
            // Perform actions for Arrow Up key
            break;
        case "ArrowDown":
            window.location.href = 'index.html';
            // Perform actions for Arrow Down key
            break;
        case "ArrowLeft":
            window.location.href = 'index.html';
            // Perform actions for Arrow Left key
            break;
        case "ArrowRight":
            window.location.href = 'index.html';
            // Perform actions for Arrow Right key
            break;
    }
});