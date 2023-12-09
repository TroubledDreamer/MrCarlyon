

let allow = false;
var instructionCard = document.getElementById('instruction-card');


    document.addEventListener("keydown", function (event) {
        if (getComputedStyle(instructionCard).display === 'none') {
        switch (event.key) {
            case "ArrowUp":
                window.location.href = 'resume.html';
                // Perform actions for Arrow Up key
                break;
            case "ArrowDown":
                window.location.href = 'experience.html';
                // Perform actions for Arrow Down key
                break;
            case "ArrowLeft":
                window.location.href = 'about.html';
                // Perform actions for Arrow Left key
                break;
            case "ArrowRight":
                window.location.href = 'project.html';
                // Perform actions for Arrow Right key
                break;
        }
    }
    });


document.addEventListener('keydown', function(event) {
    // You can customize the key that triggers the card hide
    hideCard();
});