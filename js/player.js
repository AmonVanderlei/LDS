var audioPlayer = document.getElementById('audioplayer'); //pega o tocador de audio
var loaded = false;
var hide = true;

var undoBtn = document.getElementById('undoBtn'); //pega o botão de voltar alguns segundos
var playBtn = document.getElementById('playBtn'); //pega botão de play
var pauseBtn = document.getElementById('pauseBtn'); //pega botão de pause
var redoBtn = document.getElementById('redoBtn'); //pega o botão de avançar alguns segundos
var beginBtn = document.getElementById('beginBtn'); //pega o botão de reiniciar a música
var loopBtn = document.getElementById('loopBtn'); //deixa a música em loop
var hideVolBtn = document.getElementById('hideVolBtn'); //pega o botão que esconde/mostra o controle de volume
var hideVolBtn2 = document.getElementById('hideVolBtn2'); //pega o segundo botão que esconde/mostra o controle de volume
var volume = document.getElementById('volume'); //pega a div que fica o controle de volume
var volume2 = document.getElementById('volume2'); //pega a segunda div que fica o controle de volume
var muteBtn = document.getElementById('muteBtn'); //pega o botão de silenciar a música
var unMuteBtn = document.getElementById('unMuteBtn'); //pega o botão que deixa a música tocando novamente
var muteBtn2 = document.getElementById('muteBtn2'); //pega o segundo botão de silenciar a música
var unMuteBtn2 = document.getElementById('unMuteBtn2'); //pega o segundo botão que deixa a música tocando novamente
var loader = document.getElementById('loader'); //pega o loader

undoBtn.addEventListener('click', (e) => {
  e.preventDefault();

  audioPlayer.currentTime -= 10.0;;

  return false;
});//botão de voltar alguns segundos
pauseBtn.addEventListener('click', (e) => {
  e.preventDefault();

  playBtn.style.display = "inline";
  pauseBtn.style.display = "none";
  audioPlayer.pause();

  return false;
});//botão de pause
playBtn.addEventListener('click', (e) => {
  e.preventDefault();

  playBtn.style.display = "none";
  pauseBtn.style.display = "inline";
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

  playBtn.style.display = "inline";
  pauseBtn.style.display = "none";

  audioPlayer.pause();
  audioPlayer.currentTime = 0;

  return false;
});//botão de reiniciar a música
loopBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if (audioPlayer.loop == false) {
    audioPlayer.loop = true;
    loopBtn.innerHTML = `<i class="fas fa-sync" style="color: #51cf66;"></i>`;
  } else {
    audioPlayer.loop = false;
    loopBtn.innerHTML = `<i class="fas fa-sync"></i>`;
  }

  return false;
});//botão de loop
hideVolBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if (hide == true) {
    volume.style.display = "inline-block";
    hideVolBtn.innerHTML = `<i class="fas fa-volume-up" style="color: #51cf66;"></i>`;
    hide = false;
  } else {
    volume.style.display = "none";
    hideVolBtn.innerHTML = `<i class="fas fa-volume-up"></i>`;
    hide = true;
  };

  return false;
});//botão que esconde/mostra o controle de volume
hideVolBtn2.addEventListener('click', (e) => {
  e.preventDefault();

  if (hide == true) {
    volume2.style.display = "inline-block";
    hideVolBtn2.innerHTML = `<i class="fas fa-volume-up" style="color: #51cf66;"></i>`;
    hide = false;
  } else {
    volume2.style.display = "none";
    hideVolBtn2.innerHTML = `<i class="fas fa-volume-up"></i>`;
    hide = true;
  };

  return false;
});//segundo botão que esconde/mostra o controle de volume
muteBtn.addEventListener('click', (e) => {
  e.preventDefault();

  audioPlayer.volume = 0;
  muteBtn.style.display = "none";
  unMuteBtn.style.display = "inline";

  return false;
});//botão que silencia a música
unMuteBtn.addEventListener('click', (e) => {
  e.preventDefault();

  audioPlayer.volume = 1;
  muteBtn.style.display = "inline";
  unMuteBtn.style.display = "none";

  return false;
});//botão que deixa a música tocando novamente
muteBtn2.addEventListener('click', (e) => {
  e.preventDefault();

  audioPlayer.volume = 0;
  muteBtn2.style.display = "none";
  unMuteBtn2.style.display = "inline";

  return false;
});//seguno botão que silencia a música
unMuteBtn2.addEventListener('click', (e) => {
  e.preventDefault();

  audioPlayer.volume = 1;
  muteBtn2.style.display = "inline";
  unMuteBtn2.style.display = "none";

  return false;
});//segundo botão que deixa a música tocando novamente
document.querySelectorAll('.main__col').forEach(item => {

  item.addEventListener('click', () => {
    let image = item.getAttribute('dataImage');
    let artist = item.getAttribute('dataArtist');
    let song = item.getAttribute('dataSong');
    let file = item.getAttribute('dataFile');

    let playerArtistComponent = document.getElementsByClassName('player__artist');

    playerArtistComponent[0].innerHTML =
      `<img src="` + image + `"/>
            <h3>`+ song + `<br><span>` + artist + `</span></h3>`;

    playSong(file);
  });

});//pega os atributos e mostra eles
audioPlayer.onloadstart = () => {
  loader.style.display = "inline-block";
  playBtn.style.display = "none";
  pauseBtn.style.display = "none";
};
audioPlayer.oncanplay = () => {
  loader.style.display = "none";
  pauseBtn.style.display = "inline";
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

  playBtn.style.display = "none";
  pauseBtn.style.display = "inline";
}//toca a música
var timer;
var percent = 0;
var audio = document.getElementById("audioplayer");

audio.addEventListener("playing", function (_event) {
  var duration = _event.target.duration;
  advance(duration, audio);
});
audio.addEventListener("pause", function (_event) {
  clearTimeout(timer);
});
var advance = function (duration, element) {
  var progress = document.getElementById("player__control__progress_2");
  increment = 10 / duration
  percent = (element.currentTime / element.duration) * 100;
  progress.style.width = percent + '%'
  startTimer(duration, element);

  //pega o tempo da música formata e coloca no timer
  var div = document.getElementById("current");
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
  var totalTime = document.getElementById("duration");
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
var volumeControl = document.getElementById('volume-control');

var setVolume = function () {
  audioPlayer.volume = this.value / 100;
};

volumeControl.addEventListener('change', setVolume);
volumeControl.addEventListener('input', setVolume);//ajusta o volume

var volumeControl2 = document.getElementById('volume-control2');

var setVolume2 = function () {
  audioPlayer.volume = this.value / 100;
};

volumeControl2.addEventListener('change', setVolume);
volumeControl2.addEventListener('input', setVolume);//ajusta o volume