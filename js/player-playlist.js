var audioPlayer = document.querySelector('#audioplayer'); //pega o tocador de audio
var loaded = false;
var hide = true;

var undoBtn = document.querySelector('#undoBtn'); //pega o botão de voltar alguns segundos
var playBtn = document.querySelector('#playBtn'); //pega botão de play
var pauseBtn = document.querySelector('#pauseBtn'); //pega botão de pause
var redoBtn = document.querySelector('#redoBtn'); //pega o botão de avançar alguns segundos
var hideVolBtn = document.querySelector('#hideVolBtn'); //pega o botão que esconde/mostra o controle de volume
var volume = document.querySelector('#volume'); //pega a div que fica o controle de volume
var muteBtn = document.querySelector('#muteBtn'); //pega o botão de silenciar a música
var unMuteBtn = document.querySelector('#unMuteBtn'); //pega o botão que deixa a música tocando novamente
var loader = document.querySelector('#loader'); //pega o loader
var nextBtn = document.querySelector('#nextBtn'); //pega o botão de passar uma música
var prevBtn = document.querySelector('#prevBtn'); //pega o botão de voltar uma música

undoBtn.addEventListener('click', (e) => {
	e.preventDefault();

	audioPlayer.currentTime -= 10.0;;

	return false;
});//botão de voltar alguns segundos
pauseBtn.addEventListener('click', (e) => {
	e.preventDefault();

	playBtn.classList.remove('hideBtns');
	pauseBtn.classList.remove('showBtns');
	audioPlayer.pause();

	return false;
});//botão de pause
playBtn.addEventListener('click', (e) => {
	e.preventDefault();

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
});//botão que esconde/mostra o controle de volume
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
var albunsIndex = 1;
var songsIndex = 0;
function functionLastNumber() {
	fetch("./js/json/albuns.json")
		.then(response => response.json())
		.then((jsonObj) => {

			const albuns = jsonObj['albuns'];

			for (let i = 0; i < 1; i++) {
				albuns[albunsIndex].songs.forEach(() => {
					songsIndex++;
				});
				return songsIndex
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

	document.querySelectorAll('.musicLine').forEach(item => {
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
					`<img src="` + image + `" />
			<h3>`+ song + `<br>
				<span>`+ artist + `</span>
			</h3>
			<p class="songNumber" style="display: none">`+ number + `</p>`;

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

	document.querySelectorAll('.musicLine').forEach(item => {
		if (i < songNumber) {
			if (i === songNumber - 1) {
				let image = item.getAttribute('dataImage');
				let artist = item.getAttribute('dataArtist');
				let song = item.getAttribute('dataSong');
				let file = item.getAttribute('dataFile');
				let number = item.getAttribute('dataNumber');

				let playerArtistComponent = document.querySelectorAll('.player__artist');

				playerArtistComponent[0].innerHTML =
					`<img src="` + image + `" />
				<h3>`+ song + `<br>
					<span>`+ artist + `</span>
				</h3>
				<p class="songNumber" style="display: none">`+ number + `</p>`;

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

// ^^^^^^^^^^Botões^^^^^^^^^^
window.setTimeout(playAndShowSong, 3000);
function playAndShowSong() {
	document.querySelectorAll('.musicLine').forEach(item => {

		item.addEventListener('click', () => {
			let image = item.getAttribute('dataImage');
			let artist = item.getAttribute('dataArtist');
			let song = item.getAttribute('dataSong');
			let file = item.getAttribute('dataFile');
			let number = item.getAttribute('dataNumber');

			let playerArtistComponent = document.querySelectorAll('.player__artist');

			playerArtistComponent[0].innerHTML =
				`<img src="` + image + `" />
        <h3>`+ song + `<br>
            <span>`+ artist + `</span>
		</h3>
		<p class="songNumber" style="display: none;">`+ number + `</p>`;

			playSong(file);

			audioPlayer.addEventListener("ended", function () {
				audioPlayer.currentTime = 0;
				nextBtn.click();
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