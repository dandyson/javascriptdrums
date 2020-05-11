function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const drums = document.querySelector(`.drums[data-key="${e.keyCode}"]`);
    if (!audio) { return };
    audio.currentTime = 0;
    audio.play();
    drums.classList.add('playing');
}

function removeTransition(e) {
    this.classList.remove('playing');
}

const allDrums = document.querySelectorAll('.drums');
allDrums.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);



