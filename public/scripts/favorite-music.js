document.querySelector('table').style.width = "0%";
var table__body = document.querySelector(".table__body");

fetch("../scripts/json/albuns.json")
    .then(response => response.json())
    .then((jsonObj) => {

        const albuns = jsonObj['albuns'];
        const songsName = JSON.parse(localStorage.getItem('favorites'));
        const songs = [];

        if (songsName == null || songsName == []) {
            return
        } else {
            for (let i = 0; i < songsName.length; i++) {
                albuns.forEach(album => {
                    album.songs.forEach(song => {
                        if (song.dataSong == songsName[i]) {
                            songs.push(song)
                        }
                    })
                })
                if (i == (songsName.length - 1)) {
                    createMusicLine(songs)
                }
            }
        }

        function createMusicLine(songs) {
            document.querySelector('.without-songs').style.display = "none";
            document.querySelector('table').style.width = "100%";
            songsIndex = 0;
            songs.forEach(song => {
                let myTr = document.createElement('tr');
                let myFirstTd = document.createElement('td');
                let mySecondTd = document.createElement('td');
                let myThirdTd = document.createElement('td');
                let myImg = document.createElement('img');
                let myFirstP = document.createElement('p');
                let mySecondP = document.createElement('p');

                myImg.setAttribute("src", song.dataImage);
                myImg.setAttribute("alt", "Imagem da Música");
                myFirstP.innerHTML = song.dataSong;
                mySecondP.innerHTML = song.dataArtist;
                myFirstTd.appendChild(myImg);
                myFirstTd.setAttribute("dataColumn", "Imagem")
                mySecondTd.appendChild(myFirstP);
                mySecondTd.setAttribute("dataColumn", "Nome da música")
                myThirdTd.appendChild(mySecondP);
                myThirdTd.setAttribute("dataColumn", "Nome do artista")
                myTr.setAttribute("class", "musicLine")
                myTr.setAttribute("dataImage", `${song.dataImage}`)
                myTr.setAttribute("dataArtist", `${song.dataArtist}`);
                myTr.setAttribute("dataSong", `${song.dataSong}`);
                myTr.setAttribute("dataFile", `${song.dataFile}`);
                myTr.setAttribute("dataNumber", songsIndex);
                myTr.appendChild(myFirstTd);
                myTr.appendChild(mySecondTd);
                myTr.appendChild(myThirdTd);
                table__body.appendChild(myTr);
                songsIndex++
            });
            let myScript = document.createElement('script');
            myScript.setAttribute("src", "../scripts/player-playlist.js");
            document.querySelector('body').appendChild(myScript)
        }
    })