let player = document.querySelector('.player');
let inputPlayer = document.querySelector('#inputPlayer');
let playerArtist = document.querySelector('.player__artist');
let toSmallPlayer = document.querySelector('.toSmallPlayer')

playerArtist.addEventListener('click', (e) => {
    e.preventDefault();
    if (inputPlayer.checked == false) {
        inputPlayer.checked = true;
        player.classList.add('fullscreen-player');
    }
    return false;
});
toSmallPlayer.addEventListener('click', (e) => {
    e.preventDefault();
    if (inputPlayer.checked == true) {
        inputPlayer.checked = false;
        player.classList.remove('fullscreen-player');
    }
    return false;
});