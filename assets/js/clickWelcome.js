function hideWelcomeText() {
    var welcomeText = document.getElementById('welcome-text');
    var video = document.getElementById('background-video');
    var infos = document.getElementById('informations');

    welcomeText.style.display = "none";
    video.style.display = "block";
    infos.style.display = "block";

    video.play();
    video.muted = false;
    video.volume = 0.2;

    video.addEventListener('ended', function() {
        video.currentTime = 0;
        video.play();
    });
}