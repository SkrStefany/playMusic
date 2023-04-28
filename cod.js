const btnPlay = document.querySelector("#btn-play");
const btnPlayIcon = document.querySelector("#btn-play-icon");
const btnPrev =  document.querySelector("#btn-prev");
const btnNext = document.querySelector("#btn-next");
const musicName = document.querySelector("#music-name");
const musicAuthor = document.querySelector("#music-author");
const playerCurrentTime = document.querySelector("#player-current-time");
const playerDuration =  document.querySelector("#player-duration");
const playerProgresso = document.querySelector("#player-progresso");
const audioPlayer = document.querySelector("#audio-player");

let currentMusic = 0;

const musics = [
    {
        name: "Luis V",
        author: "Sidoka",
        path: <iframe width="560" height="315" src="https://www.youtube.com/embed/kCLyivl080g"
         title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
         encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    },
    {
        name: "Luis V",
        author: "Sidoka",
        path: <iframe width="560" height="315" src="https://www.youtube.com/embed/kCLyivl080g"
         title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
         encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    }

];

btnPlay.addEventListener("click", () => togglePlayMusic());
btnPrev.addEventListener("clicl", () => changeMusic(false));
btnNext.addEventListener("click", () => changeMusic ());
audioPlayer.addEventListener("timeupdate", () => timeupdate());

const togglePlayMusic = () => {
    if(audioPlayer.paused) {
        audioPlayer.play();
        btnPlayIcon.classList.replace("bi-play-fill", "bi-pause-fill");
    } else {
        audioPlayer.pause();
        btnPlayIcon.classList.replace("bi-pause-fill","bi-play-fill");
    }
};

const changeMusic = (next = true ) => {
    if(next && currentMusic < musicAuthor.length - 1) {
        currentMusic++;
    } else if (!next && currentMusic > 0) {
        currentMusic --;
    } else {
        return;
    }

    updatePlayer();
    togglePlayMusic();
};

const updatePlayer = () => {
    const music = music [currentMusic];

    musicNamee.innerHTML = music.name;
    musicAuthor.innerHTML = music.author;
    audioPlayer.src = music.path;
};

const timeUpdate = () => {
    const { currentTime, duration } = audioPlayer;

    if (isNaN(duration)) return;

    playerDuration.innerHTML = formatSecondsTomMinutes(duration);
    playerCurrentTime.innerHTML = formatSecondsTomMinutes(currentTime);
    playerProgresso.max = duration;
    playerProgresso.value = currentTime;
};

const formatSecondsTomMinutes = (seconds) => {
    return new Date(seconds * 1000).toISOString().slice(14, 19);
};

window.onload = () => {
    updatePlayer();
};