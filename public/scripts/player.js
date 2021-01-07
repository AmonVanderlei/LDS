var audioPlayer = document.querySelector('#audioplayer'); //pega o tocador de audio
var playing = false;
var loaded = false;
var hide = true;

var undoBtn = document.querySelector('#undoBtn'); //pega o botão de voltar alguns segundos
var playBtn = document.querySelector('#playBtn'); //pega botão de play
var pauseBtn = document.querySelector('#pauseBtn'); //pega botão de pause
var redoBtn = document.querySelector('#redoBtn'); //pega o botão de avançar alguns segundos
var beginBtn = document.querySelector('#beginBtn'); //pega o botão de reiniciar a música
var loopBtn = document.querySelector('#loopBtn'); //deixa a música em loop
var loopBtn2 = document.querySelector('#loopBtn2'); //segundo botão que deixa a música em loop
var hideVolBtn = document.querySelector('#hideVolBtn'); //pega o botão que esconde/mostra o controle de volume
var hideVolBtn2 = document.querySelector('#hideVolBtn2'); //pega o segundo botão que esconde/mostra o controle de volume
var volume = document.querySelector('#volume'); //pega a div que fica o controle de volume
var volume2 = document.querySelector('#volume2'); //pega a segunda div que fica o controle de volume
var muteBtn = document.querySelector('#muteBtn'); //pega o botão de silenciar a música
var unMuteBtn = document.querySelector('#unMuteBtn'); //pega o botão que deixa a música tocando novamente
var muteBtn2 = document.querySelector('#muteBtn2'); //pega o segundo botão de silenciar a música
var unMuteBtn2 = document.querySelector('#unMuteBtn2'); //pega o segundo botão que deixa a música tocando novamente
var loader = document.querySelector('#loader'); //pega o loader
var threeDots = document.querySelector('.threeDots') //pega o botão dos 3 pontinhos
var threeDotsBtns = document.querySelector('.threeDotsBtns') //pega a div com os botões dentro do "threeDots"

undoBtn.addEventListener('click', (e) => {
    e.preventDefault();

    audioPlayer.currentTime -= 10.0;;

    return false;
});//botão de voltar alguns segundos
pauseBtn.addEventListener('click', (e) => {
    e.preventDefault();

    playing = false;
    playBtn.classList.remove('hideBtns');
    pauseBtn.classList.remove('showBtns');
    audioPlayer.pause();

    return false;
});//botão de pause
playBtn.addEventListener('click', (e) => {
    e.preventDefault();

    playing = true;
    playBtn.classList.add('hideBtns');
    pauseBtn.classList.add('showBtns');
    audioPlayer.play();

    return false;
});//botão de play
redoBtn.addEventListener('click', (e) => {
    e.preventDefault();

    audioPlayer.currentTime += 10.0;

    return false;
});//botão de avançar alguns segundos
beginBtn.addEventListener('click', (e) => {
    e.preventDefault();

    playBtn.classList.remove('hideBtns');
    pauseBtn.classList.remove('showBtns');

    playing = false;
    audioPlayer.pause();
    audioPlayer.currentTime = 0;

    return false;
});//botão de reiniciar a música
loopBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (audioPlayer.loop == false) {
        audioPlayer.loop = true;
        loopBtn.innerHTML = `<i class="fas fa-sync btnIcon green">`;
    } else {
        audioPlayer.loop = false;
        loopBtn.innerHTML = `<i class="fas fa-sync btnIcon">`;
    }

    return false;
});//botão de loop
loopBtn2.addEventListener('click', (e) => {
    e.preventDefault();

    if (audioPlayer.loop == false) {
        audioPlayer.loop = true;
        loopBtn2.innerHTML = `<i class="fas fa-sync btnIcon green">`;
    } else {
        audioPlayer.loop = false;
        loopBtn2.innerHTML = `<i class="fas fa-sync btnIcon">`;
    }

    return false;
});//segundo botão de loop
hideVolBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (hide == true) {
        volume.classList.add("showInlineBlock");
        hideVolBtn.innerHTML = `<i class="fas fa-volume-up btnIcon green">`;
        hide = false;
    } else {
        volume.classList.remove("showInlineBlock");
        hideVolBtn.innerHTML = `<i class="fas fa-volume-up btnIcon">`;
        hide = true;
    };

    return false;
});//botão que esconde/mostra o controle de volume
hideVolBtn2.addEventListener('click', (e) => {
    e.preventDefault();

    if (hide == true) {
        volume2.classList.add("showInlineBlock");
        hideVolBtn2.innerHTML = `<i class="fas fa-volume-up btnIcon green">`;
        hide = false;
    } else {
        volume2.classList.remove("showInlineBlock");
        hideVolBtn2.innerHTML = `<i class="fas fa-volume-up btnIcon">`;
        hide = true;
    };

    return false;
});//segundo botão que esconde/mostra o controle de volume
muteBtn.addEventListener('click', (e) => {
    e.preventDefault();

    audioPlayer.volume = 0;
    muteBtn.classList.add('hideBtns');
    unMuteBtn.classList.add('showBtns');

    return false;
});//botão que silencia a música
unMuteBtn.addEventListener('click', (e) => {
    e.preventDefault();

    audioPlayer.volume = 1;
    muteBtn.classList.remove('hideBtns');
    unMuteBtn.classList.remove('showBtns');

    return false;
});//botão que deixa a música tocando novamente
muteBtn2.addEventListener('click', (e) => {
    e.preventDefault();

    audioPlayer.volume = 0;
    muteBtn2.classList.add('hideBtns');
    unMuteBtn2.classList.add('showBtns');

    return false;
});//seguno botão que silencia a música
unMuteBtn2.addEventListener('click', (e) => {
    e.preventDefault();

    audioPlayer.volume = 1;
    muteBtn2.classList.remove('hideBtns');
    unMuteBtn2.classList.remove('showBtns');

    return false;
});//segundo botão que deixa a música tocando novamente
var display = "none";
threeDots.addEventListener('click', (e) => {
    e.preventDefault();

    if (display == "flex") {
        threeDotsBtns.classList.remove('showThreeDotsBtns');
        threeDots.innerHTML = `<i class="fas fa-ellipsis-v threeDotsIcon"></i>`;
        display = "none";
    } else {
        threeDotsBtns.classList.add('showThreeDotsBtns');
        threeDots.innerHTML = `<i class="fas fa-ellipsis-v green"></i>`;
        display = "flex";
    }

    return false;
});//botão dos três pontos
window.addEventListener('keydown', function (e) {
    let code = e.which || e.keyCode;
    if (code == 32) {
        e.preventDefault();
    } else {
        return true;
    }
    if (playing == true) {
        pauseBtn.click();
    } else {
        playBtn.click();
    }
});
window.addEventListener('keydown', function (e) {
    let code = e.which || e.keyCode;
    if (code == 37) {
        e.preventDefault();
    } else {
        return true;
    }
    undoBtn.click();
});
window.addEventListener('keydown', function (e) {
    let code = e.which || e.keyCode;
    if (code == 39) {
        e.preventDefault();
    } else {
        return true;
    }
    redoBtn.click();
});
window.setTimeout(playAndShowSong, 3000);
function playAndShowSong() {
    document.querySelectorAll('.main__col').forEach(item => {

        item.addEventListener('click', () => {
            let image = item.getAttribute('dataImage');
            let artist = item.getAttribute('dataArtist');
            let song = item.getAttribute('dataSong');
            let file = item.getAttribute('dataFile');

            let playerArtistComponent = document.querySelectorAll('.player__artist');

            playerArtistComponent[0].innerHTML =
                `<img alt="Imagem do Música" src="` + image + `"/>
              <h3>`+ song + `<br><span>` + artist + `</span></h3>`;

            document.querySelector('title').innerHTML = song + ' - ' + artist;
            document.querySelectorAll('link')[2].href = image;
            document.querySelectorAll('link')[3].href = image;

            playSong(file);
        });

    });//pega os atributos e mostra eles
}
audioPlayer.onloadstart = () => {
    loader.classList.add('showInlineBlock');
    playBtn.classList.add('hideBtns');
    pauseBtn.classList.remove('showBtns');
};
audioPlayer.onplaying = () => {
    loader.classList.remove('showInlineBlock');
    pauseBtn.classList.add('showBtns');
};
const playSong = (file) => {

    if (loaded == true) {
        audioPlayer.src = '';
        loaded = false;
    }

    if (loaded == false) {
        audioPlayer.src = file;
        loaded = true;
    }

    playing = true;
    audioPlayer.play();

    playBtn.classList.add('hideBtns');
    pauseBtn.classList.add('showBtns');
}//toca a música
var timer;
var percent = 0;
var audio = document.querySelector("#audioplayer");

audio.addEventListener("playing", function (_event) {
    var duration = _event.target.duration;
    advance(duration, audio);
});
audio.addEventListener("pause", function (_event) {
    clearTimeout(timer);
});
var advance = function (duration, element) {
    var progress = document.querySelector("#player__control__progress_2");
    increment = 10 / duration
    percent = (element.currentTime / element.duration) * 100;
    progress.style.width = percent + '%'
    startTimer(duration, element);

    //pega o tempo da música formata e coloca no timer
    var div = document.querySelector("#current");
    var atualTime = element.currentTime
    var seconds = Math.trunc(atualTime)
    var negativeSeconds = 0
    var minutes = 0
    while (seconds >= 60) {
        minutes = minutes + 1
        negativeSeconds = negativeSeconds + 60
        seconds = Math.trunc(atualTime) - negativeSeconds
    }
    if (minutes < 10) {
        minutes = "0" + minutes
    } else {
        minutes = minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    } else {
        seconds = seconds
    }
    div.innerHTML = minutes + `:` + seconds + ` /`

    //pega o tempo total da música formata e coloca no timer
    var totalTime = document.querySelector("#duration");
    totalSeconds = Math.trunc(duration)
    totalMinutes = 0
    while (totalSeconds >= 60) {
        totalMinutes = totalMinutes + 1
        totalSeconds = totalSeconds - 60
    }
    if (totalMinutes < 10) {
        totalMinutes = "0" + totalMinutes
    } else {
        totalMinutes = totalMinutes
    }
    if (totalSeconds < 10) {
        totalSeconds = "0" + totalSeconds
    } else {
        totalSeconds = totalSeconds
    }
    totalTime.innerHTML = totalMinutes + `:` + totalSeconds
}
var startTimer = function (duration, element) {
    if (percent < 100) {
        timer = setTimeout(function () { advance(duration, element) }, 100);
    }
}//atualiza a barra de progresso
var volumeControl = document.querySelector('#volume-control');

var setVolume = function () {
    audioPlayer.volume = this.value / 100;
};

volumeControl.addEventListener('change', setVolume);
volumeControl.addEventListener('input', setVolume);//ajusta o volume

var volumeControl2 = document.querySelector('#volume-control2');

var setVolume2 = function () {
    audioPlayer.volume = this.value / 100;
};

volumeControl2.addEventListener('change', setVolume);
volumeControl2.addEventListener('input', setVolume);//ajusta o volume