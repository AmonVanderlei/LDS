var main__row__title = document.querySelector("#main__row__title");
var main__row__songs = document.querySelector("#main__row__songs");

fetch("../public/scripts/json/albuns.json")
    .then(response => response.json())
    .then((jsonObj) => {

        let currentAlbum = 0;
        const albuns = jsonObj['albuns'];
        const albumName = albuns[currentAlbum].albumName;
        let title = `<h2>` + albumName + `</h2>`;
        main__row__title.innerHTML = title;

        const songs = albuns[currentAlbum].songs;
        for (let i = 0; i < songs.length; i++) {
            let myDiv = document.createElement('div');
            myDiv.setAttribute("class", "main__col");
            myDiv.setAttribute("dataImage", `${songs[i].dataImage}`)
            myDiv.setAttribute("dataArtist", `${songs[i].dataArtist}`);
            myDiv.setAttribute("dataSong", `${songs[i].dataSong}`);
            myDiv.setAttribute("dataFile", `${songs[i].dataFile}`);

            myDiv.innerHTML = `<img src="${songs[i].dataImage}" /><h3>${songs[i].songName}</h3><p>${songs[i].artistName}</p>`;
            main__row__songs.appendChild(myDiv)
        }
    })

var main__row__title_1 = document.querySelector("#main__row__title_1");
var main__row__songs_1 = document.querySelector("#main__row__songs_1");

fetch("../public/scripts/json/albuns.json")
    .then(response => response.json())
    .then((jsonObj) => {

        let currentAlbum = 1;
        const albuns = jsonObj['albuns'];
        const albumName = albuns[currentAlbum].albumName;
        let title = `<h2>` + albumName + `</h2>`;
        main__row__title_1.innerHTML = title;

        const songs = albuns[currentAlbum].songs;
        for (let i = 0; i < songs.length; i++) {
            let myDiv = document.createElement('div');
            myDiv.setAttribute("class", "main__col");
            myDiv.setAttribute("dataImage", `${songs[i].dataImage}`)
            myDiv.setAttribute("dataArtist", `${songs[i].dataArtist}`);
            myDiv.setAttribute("dataSong", `${songs[i].dataSong}`);
            myDiv.setAttribute("dataFile", `${songs[i].dataFile}`);

            myDiv.innerHTML = `<img src="${songs[i].dataImage}" /><h3>${songs[i].songName}</h3><p>${songs[i].artistName}</p>`;
            main__row__songs_1.appendChild(myDiv)
        }
    })

var main__row__title_2 = document.querySelector("#main__row__title_2");
var main__row__songs_2 = document.querySelector("#main__row__songs_2");

fetch("../public/scripts/json/albuns.json")
    .then(response => response.json())
    .then((jsonObj) => {

        let currentAlbum = 2;
        const albuns = jsonObj['albuns'];
        const albumName = albuns[currentAlbum].albumName;
        let title = `<h2>` + albumName + `</h2>`;
        main__row__title_2.innerHTML = title;

        const songs = albuns[currentAlbum].songs;
        for (let i = 0; i < songs.length; i++) {
            let myDiv = document.createElement('div');
            myDiv.setAttribute("class", "main__col");
            myDiv.setAttribute("dataImage", `${songs[i].dataImage}`)
            myDiv.setAttribute("dataArtist", `${songs[i].dataArtist}`);
            myDiv.setAttribute("dataSong", `${songs[i].dataSong}`);
            myDiv.setAttribute("dataFile", `${songs[i].dataFile}`);

            myDiv.innerHTML = `<img src="${songs[i].dataImage}" /><h3>${songs[i].songName}</h3><p>${songs[i].artistName}</p>`;
            main__row__songs_2.appendChild(myDiv)
        }
    })

var main__row__title_3 = document.querySelector("#main__row__title_3");
var main__row__songs_3 = document.querySelector("#main__row__songs_3");

fetch("../public/scripts/json/albuns.json")
    .then(response => response.json())
    .then((jsonObj) => {

        let currentAlbum = 3;
        const albuns = jsonObj['albuns'];
        const albumName = albuns[currentAlbum].albumName;
        let title = `<h2>` + albumName + `</h2>`;
        main__row__title_3.innerHTML = title;

        const songs = albuns[currentAlbum].songs;
        for (let i = 0; i < songs.length; i++) {
            let myDiv = document.createElement('div');
            myDiv.setAttribute("class", "main__col");
            myDiv.setAttribute("dataImage", `${songs[i].dataImage}`)
            myDiv.setAttribute("dataArtist", `${songs[i].dataArtist}`);
            myDiv.setAttribute("dataSong", `${songs[i].dataSong}`);
            myDiv.setAttribute("dataFile", `${songs[i].dataFile}`);

            myDiv.innerHTML = `<img src="${songs[i].dataImage}" /><h3>${songs[i].songName}</h3><p>${songs[i].artistName}</p>`;
            main__row__songs_3.appendChild(myDiv)
        }
    })