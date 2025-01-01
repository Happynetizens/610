var audio = null;

function toggleMusic(musicFile) {
    if (audio && audio.paused == false) {
        audio.pause();
        audio = null;
        return;
    }

    if (musicFile == null) {
        return;
    }

    audio = new Audio(musicFile);
    audio.play();
}
