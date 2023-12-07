function moveImage(event) {
    const floatingImage = document.getElementById('floatingImage');

    // Set the position of the image relative to the mouse
    floatingImage.style.left = event.clientX + 'px';
    floatingImage.style.top = event.clientY + 'px';
}