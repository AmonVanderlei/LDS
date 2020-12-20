var table__body = document.querySelector(".table__body");

fetch("../scripts/json/albuns.json")
    .then(response => response.json())
    .then((jsonObj) => {

        const albuns = jsonObj['albuns'];

        var albunsIndex = localStorage.getItem('albunsIndex');
        var songsIndex = 0;

        for (let i = 0; i < 1; i++) {
            let playerArtistComponent = document.querySelectorAll('.player__artist');

            var image = albuns[albunsIndex].albumImage;
            var song = albuns[albunsIndex].albumName;
            var yearAndLanguage = `${albuns[albunsIndex].albumLanguage} - ${albuns[albunsIndex].albumYear}`;

            playerArtistComponent[0].innerHTML =
                `<img src="` + image + `" />
                <h3>`+ song + `<br>
                    <span>`+ yearAndLanguage + `</span>
                </h3>`;

            document.querySelector('title').innerHTML = albuns[albunsIndex].albumName + ` - LDS`;
            albuns[albunsIndex].songs.forEach(() => {
                let myTr = document.createElement('tr');
                let myFirstTd = document.createElement('td');
                let mySecondTd = document.createElement('td');
                let myThirdTd = document.createElement('td');
                let myImg = document.createElement('img');
                let myFirstP = document.createElement('p');
                let mySecondP = document.createElement('p');

                myImg.setAttribute("src", albuns[albunsIndex].songs[songsIndex].dataImage);
                myFirstP.innerHTML = albuns[albunsIndex].songs[songsIndex].dataSong;
                mySecondP.innerHTML = albuns[albunsIndex].songs[songsIndex].dataArtist;
                myFirstTd.appendChild(myImg);
                myFirstTd.setAttribute("dataColumn", "Imagem")
                mySecondTd.appendChild(myFirstP);
                mySecondTd.setAttribute("dataColumn", "Nome da música")
                myThirdTd.appendChild(mySecondP);
                myThirdTd.setAttribute("dataColumn", "Nome do artista")
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