var instructionsShown = localStorage.getItem('instructionsShown');
localStorage.setItem('instructionsShown', 'true');


document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "ArrowUp":
            //window.location.href = 'resume.html';
            // Perform actions for Arrow Up key
            break;
        case "ArrowDown":
            //window.location.href = 'experience.html';
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