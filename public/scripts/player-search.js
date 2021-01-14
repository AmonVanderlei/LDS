var audioPlayer = document.querySelector('#audioplayer');
var playing = false;
var loaded = false;
var hide = true;

var undoBtn = document.querySelector('#undoBtn');
var playBtn = document.querySelector('#playBtn');
var pauseBtn = document.querySelector('#pauseBtn');
var redoBtn = document.querySelector('#redoBtn');
var hideVolBtn = document.querySelector('#hideVolBtn');
var volume = document.querySelector('#volume');
var muteBtn = document.querySelector('#muteBtn');
var unMuteBtn = document.querySelector('#unMuteBtn');
var loader = document.querySelector('#loader');
var nextBtn = document.querySelector('#nextBtn');
var prevBtn = document.querySelector('#prevBtn');
var randomBtn = document.querySelector('#randomBtn');
var randomBtnLabel = document.querySelector('#randomBtnLabel');

undoBtn.addEventListener('click', (e) => {
    e.preventDefault();

    audioPlayer.currentTime -= 10.0;;

    return false;
});
pauseBtn.addEventListener('click', (e) => {
    e.preventDefault();

    playBtn.classList.remove('hideBtns');
    pauseBtn.classList.remove('showBtns');
    playing = false;
    audioPlayer.pause();

    return false;
});
playBtn.addEventListener('click', (e) => {
    e.preventDefault();

    playBtn.classList.add('hideBtns');
    pauseBtn.classList.add('showBtns');
    playing = true;
    audioPlayer.play();

    return false;
});
redoBtn.addEventListener('click', (e) => {
    e.preventDefault();

    audioPlayer.currentTime += 10.0;

    return false;
});
hideVolBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (hide == true) {
        volume.classList.add("showInlineBlock");
        hideVolBtn.innerHTML = `<i class="fas fa-volume-up green"></i>`;
        hide = false;
    } else {
        volume.classList.remove("showInlineBlock");
        hideVolBtn.innerHTML = `<i class="fas fa-volume-up"></i>`;
        hide = true;
    };

    return false;
});
muteBtn.addEventListener('click', (e) => {
    e.preventDefault();

    audioPlayer.volume = 0;
    muteBtn.classList.add('hideBtns');
    unMuteBtn.classList.add('showBtns');

    return false;
});
unMuteBtn.addEventListener('click', (e) => {
    e.preventDefault();

    audioPlayer.volume = 1;
    muteBtn.classList.remove('hideBtns');
    unMuteBtn.classList.remove('showBtns');

    return false;
});

var albunsIndex = localStorage.getItem('albunsIndex');
var songsIndex = 0;
function functionLastNumber() {
    fetch("../scripts/json/albuns.json")
        .then(response => response.json())
        .then((jsonObj) => {
            const albuns = jsonObj['albuns'];
            for (let i = 0; i < albuns.length; i++) {
                for (let j = 0; j < albuns[i].songs.length; j++) {
                    songsIndex++;
                }
            }
        })
}
functionLastNumber()
nextBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let i = 0;
    let songNumber = parseInt(document.querySelector('.songNumber').innerHTML);
    let lastNumber = songsIndex - 1;

    if (songNumber === lastNumber) {
        songNumber = -1;
    }

    document.querySelectorAll('.main__col').forEach(item => {
        if (i >= songNumber + 2) {
            return
        } else {
            if (i === songNumber + 1) {
                let image = item.getAttribute('dataImage');
                let artist = item.getAttribute('dataArtist');
                let song = item.getAttribute('dataSong');
                let file = item.getAttribute('dataFile');
                let number = item.getAttribute('dataNumber');

                let playerArtistComponent = document.querySelectorAll('.player__artist');

                playerArtistComponent[0].innerHTML =
                    `<img alt="Imagem do Música" src="` + image + `" />
			<h3>`+ song + `<br>
				<span>`+ artist + `</span>
			</h3>
			<p class="songNumber" style="display: none">`+ number + `</p>`;

                document.querySelector('title').innerHTML = song + ' - ' + artist;
                document.querySelectorAll('link')[2].href = image;
                document.querySelectorAll('link')[3].href = image;

                playSong(file);
                i++
            } else {
                i++
            }
        }
    });
    return false;
});
prevBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let i = 0;
    let songNumber = parseInt(document.querySelector('.songNumber').innerHTML);
    let lastNumber = songsIndex;

    if (songNumber === 0) {
        songNumber = lastNumber;
    }

    document.querySelectorAll('.main__col').forEach(item => {
        if (i < songNumber) {
            if (i === songNumber - 1) {
                let image = item.getAttribute('dataImage');
                let artist = item.getAttribute('dataArtist');
                let song = item.getAttribute('dataSong');
                let file = item.getAttribute('dataFile');
                let number = item.getAttribute('dataNumber');

                let playerArtistComponent = document.querySelectorAll('.player__artist');

                playerArtistComponent[0].innerHTML =
                    `<img alt="Imagem do Música" src="` + image + `" />
				<h3>`+ song + `<br>
					<span>`+ artist + `</span>
				</h3>
				<p class="songNumber" style="display: none">`+ number + `</p>`;

                document.querySelector('title').innerHTML = song + ' - ' + artist;
                document.querySelectorAll('link')[2].href = image;
                document.querySelectorAll('link')[3].href = image;

                playSong(file);
                i++
            } else {
                i++
            }
        } else {
            i++
        }
    });
    return false;
});
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
randomBtn.addEventListener('click', () => {
    if (randomBtn.checked) {
        randomBtnLabel.innerHTML = `<i class="fas fa-random" style="color:var(--index-color);"></i>`;
    } else {
        randomBtnLabel.innerHTML = `<i class="fas fa-random"></i>`;
    }
})
// ^^^^^^^^^^Botões^^^^^^^^^^
var numberToUse = 0;
let usedNumbers = [];

async function randomNumber(minimum, maximum) {
    const min = Math.ceil(minimum);
    const max = Math.floor(maximum);
    const random = Math.floor(Math.random() * (max - min) + min);
    if (usedNumbers.includes(random)) {
        randomNumber(min, max);
    } else {
        usedNumbers.push(random);
        numberToUse = random;
        return random
    };
};
function randomBtnFunction() {
    fetch("../scripts/json/albuns.json")
        .then(response => response.json())
        .then((jsonObj) => {

            const albuns = jsonObj['albuns'];

            if (usedNumbers.length == songsIndex) {
                usedNumbers = [];
            }
            randomNumber(0, songsIndex)
            let songIndex = numberToUse;

            let item = document.querySelectorAll('.main__col')[songIndex];

            let image = item.getAttribute('dataImage');
            let artist = item.getAttribute('dataArtist');
            let song = item.getAttribute('dataSong');
            let file = item.getAttribute('dataFile');
            let number = item.getAttribute('dataNumber');

            let playerArtistComponent = document.querySelectorAll('.player__artist');

            playerArtistComponent[0].innerHTML =
                `<img alt="Imagem do Música" src="` + image + `" />
        <h3>`+ song + `<br>
            <span>`+ artist + `</span>
		</h3>
		<p class="songNumber" style="display: none">`+ number + `</p>`;

            document.querySelector('title').innerHTML = song + ' - ' + artist;
            document.querySelectorAll('link')[2].href = image;
            document.querySelectorAll('link')[3].href = image;

            playSong(file);
        })
}
function firstMusicLine() {
    let item = document.querySelectorAll('.main__col')[0];

    let image = item.getAttribute('dataImage');
    let artist = item.getAttribute('dataArtist');
    let song = item.getAttribute('dataSong');
    let file = item.getAttribute('dataFile');
    let number = item.getAttribute('dataNumber');

    let playerArtistComponent = document.querySelectorAll('.player__artist');

    playerArtistComponent[0].innerHTML =
        `<img alt="Imagem do Música" src="` + image + `" />
        <h3>`+ song + `<br>
            <span>`+ artist + `</span>
		</h3>
		<p class="songNumber" style="display: none">`+ number + `</p>`;

    document.querySelector('title').innerHTML = song + ' - ' + artist;
    document.querySelectorAll('link')[2].href = image;
    document.querySelectorAll('link')[3].href = image;

    playSong(file);

    audioPlayer.addEventListener("ended", function () {
        audioPlayer.currentTime = 0;
        if (randomBtn.checked) {
            randomBtnFunction();
        } else {
            nextBtn.click();
        }
    });
}
window.setTimeout(playAndShowSong, 3000);
function playAndShowSong() {
    firstMusicLine()
    document.querySelectorAll('.main__col').forEach(item => {

        item.addEventListener('click', () => {
            let image = item.getAttribute('dataImage');
            let artist = item.getAttribute('dataArtist');
            let song = item.getAttribute('dataSong');
            let file = item.getAttribute('dataFile');
            let number = item.getAttribute('dataNumber');

            let playerArtistComponent = document.querySelectorAll('.player__artist');

            playerArtistComponent[0].innerHTML =
                `<img alt="Imagem do Música" src="` + image + `" />
        <h3>`+ song + `<br>
            <span>`+ artist + `</span>
		</h3>
        <p class="songNumber" style="display: none">`+ number + `</p>`;

            document.querySelector('title').innerHTML = song + ' - ' + artist;
            document.querySelectorAll('link')[2].href = image;
            document.querySelectorAll('link')[3].href = image;

            playSong(file);

            audioPlayer.addEventListener("ended", function () {
                audioPlayer.currentTime = 0;
                if (randomBtn.checked) {
                    randomBtnFunction();
                } else {
                    nextBtn.click();
                }
            });
        });

    });
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
}

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
}
var volumeControl = document.querySelector('#volume-control');

var setVolume = function () {
    audioPlayer.volume = this.value / 100;
};

volumeControl.addEventListener('change', setVolume);
volumeControl.addEventListener('input', setVolume);//ajusta o volume