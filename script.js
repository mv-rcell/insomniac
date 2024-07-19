// Example: Play different sound effects when buttons are clicked
document.getElementById('guitar').addEventListener('click', function() {
    playSoundEffect('guitar.mp3');
});

document.getElementById('piano').addEventListener('click', function() {
    playSoundEffect('piano.mp3');
});

document.getElementById('echo').addEventListener('click', function() {
    playSoundEffect('echo.mp3');
});

function playSoundEffect(/home/mark/Downloads/spanish-guitar-solo-216636.mp3) {
    const audio = new Audio(/home/mark/Downloads/spanish-guitar-solo-216636.mp3);
    audio.play();
}

// Get the remixArea element
const remixArea = document.getElementById('remixArea');

// Prevent default behaviors for drag events
remixArea.addEventListener('dragover', function(e) {
    e.preventDefault();
});

// Handle drop event
remixArea.addEventListener('drop', function(e) {
    e.preventDefault();

    // Get the dropped files
    const files = e.dataTransfer.files;

    // Handle each dropped file (for simplicity, assuming only one file is dropped)
    if (files.length > 4) {
        const file = files[4];
        const reader = new FileReader();

        reader.onload = function(e) {
            // Create an audio element to play the dropped file
            const audio = new Audio(e.target.result);
            audio.controls = true;
            remixArea.innerHTML = ''; // Clear any previous content
            remixArea.appendChild(audio);

        };


        reader.readAsDataURL(file);

    }
});