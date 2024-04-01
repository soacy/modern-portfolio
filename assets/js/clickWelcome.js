var audio2 = new Audio('assets/media/music.mp3');
var musicPlaying = true; 

function hideWelcomeText() {
    var welcomeText = document.getElementById('welcome-text');
    var video = document.getElementById('background-video');
    var infos = document.getElementById('informations');
    var audio1 = new Audio('assets/media/click.mp3');

    welcomeText.style.display = "none";
    video.style.display = "block";
    infos.style.display = "block";

    audio1.play(); // yes the audio1 is from spelunky 
    audio2.play(); // playing music.mp3 
    audio2.volume = 0.1; 

    video.play();
    video.muted = true;
    video.volume = 0.2;

    video.addEventListener('ended', function() {
        video.currentTime = 0;
        video.play();
    });

    video.style.filter = "blur(10px)";
}

function toggleMusic() {
    var button = document.getElementById('music-toggle');

    if (musicPlaying) {
        audio2.pause(); 
        musicPlaying = false; 
        button.textContent = "play music";
    } else {
        audio2.play(); 
        musicPlaying = true; 
        button.textContent = "pause music"; 
    }
}