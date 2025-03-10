const buttonPlayPause = document.querySelector('.play-pause');
const buttonPrev = document.querySelector('.prev');
const buttonNext = document.querySelector('.next');
const playerTitle = document.querySelector('.audio_player_name p');
const volumeRange = document.querySelector('.volume');

let trackNum = 0;

const trackNames = ["Sound 1", "Sound 2", "Sound 3"];

playerTitle.textContent = trackNames[trackNum];
let isPlay = false;
let contex = null;
let gainNode = null; 

function getCurrentAudio() { 
    return audio = document.querySelectorAll('audio')[trackNum];
}

function trackPlay() {
    contex.resume().then( () => audio.play());
    isPlay = true;
}

function trackPause() {
    audio.pause();
    isPlay = false;
}



buttonPlayPause.addEventListener("click", () => {
    if(!contex) {
    contex = new AudioContext();
    }
    if (!gainNode) {
     gainNode = contex.createGain();
    }

    if(isPlay){
        trackPause()
    } else {
        trackPlay();
    }

    volumeRange.addEventListener("input", () => {
        gainNode.gain.value = +volumeRange.value;
        audio.volume = +volumeRange.value;
    })
});


buttonNext.addEventListener("click", () => { 
    trackPause();
    trackNum = trackNum === trackNames.length - 1 ? 0 : trackNum + 1;
    playerTitle.textContent = trackNames[trackNum];
    getCurrentAudio();
})

buttonPrev.addEventListener("click", () => {
    trackPause();
    trackNum = trackNum === 0 ? trackNames.length - 1 : trackNum - 1;
    playerTitle.textContent = trackNames[trackNum];
    getCurrentAudio();
})

getCurrentAudio();

