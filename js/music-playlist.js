var table__body = document.querySelector(".table__body");

fetch("./js/json/albuns.json")
    .then(response => response.json())
    .then((jsonObj) => {

        const albuns = jsonObj['albuns'];

        for (let i = 0; i < 1; i++) {
            let playerArtistComponent = document.querySelectorAll('.player__artist');

            var image = albuns[i].albumImage;
            var song = albuns[i].albumName;
            var yearAndLanguage = `${albuns[i].albumLanguage} - ${albuns[i].albumYear}`;

            playerArtistComponent[0].innerHTML =
                `<img src="` + image + `" />
                <h3>`+ song + `<br>
                    <span>`+ yearAndLanguage + `</span>
                </h3>`;

            var albunsIndex = 0;
            var songsIndex = 0;
            document.querySelector('title').innerHTML = albuns[albunsIndex].albumName + ` - Spotify`;
            albuns[albunsIndex].songs.forEach(() => {
                let myTr = document.createElement('tr');
                let myFirstTd = document.createElement('td');
                let mySecondTd = document.createElement('td');
                let myThirdTd = document.createElement('td');
                let myImg = document.createElement('img');
                let myFirstP = document.createElement('p');
                let mySecondP = document.createElement('p');

                myImg.setAttribute("src", albuns[albunsIndex].songs[songsIndex].dataImage);
                myFirstP.innerHTML = albuns[albunsIndex].songs[songsIndex].songName;
                mySecondP.innerHTML = albuns[albunsIndex].songs[songsIndex].artistName;
                myFirstTd.appendChild(myImg);
                mySecondTd.appendChild(myFirstP);
                myThirdTd.appendChild(mySecondP);
                myTr.setAttribute("class", "musicLine")
                myTr.setAttribute("dataImage", `${albuns[albunsIndex].songs[songsIndex].dataImage}`)
                myTr.setAttribute("dataArtist", `${albuns[albunsIndex].songs[songsIndex].dataArtist}`);
                myTr.setAttribute("dataSong", `${albuns[albunsIndex].songs[songsIndex].dataSong}`);
                myTr.setAttribute("dataFile", `${albuns[albunsIndex].songs[songsIndex].dataFile}`);
                myTr.setAttribute("dataNumber", songsIndex);
                myTr.appendChild(myFirstTd);
                myTr.appendChild(mySecondTd);
                myTr.appendChild(myThirdTd);
                table__body.appendChild(myTr);
                songsIndex++;
            });
        }
    })