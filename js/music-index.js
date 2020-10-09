var main__row__title = document.getElementById("main__row__title");
var main__row__songs = document.getElementById("main__row__songs");

fetch("./js/json/2020-Eng.json")
    .then(response => response.json())
    .then((jsonObj) => {

        const albumName = jsonObj['albumName'];
        let title = `<h2>` + albumName + `</h2>`;
        main__row__title.innerHTML = title;

        const songs = jsonObj['songs'];
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

var main__row__title_1 = document.getElementById("main__row__title_1");
var main__row__songs_1 = document.getElementById("main__row__songs_1");

fetch("./js/json/2020-Por.json")
    .then(response => response.json())
    .then((jsonObj) => {

        const albumName = jsonObj['albumName'];
        let title = `<h2>` + albumName + `</h2>`;
        main__row__title_1.innerHTML = title;

        const songs = jsonObj['songs'];
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

var main__row__title_2 = document.getElementById("main__row__title_2");
var main__row__songs_2 = document.getElementById("main__row__songs_2");

fetch("./js/json/2020-Por.json")
    .then(response => response.json())
    .then((jsonObj) => {

        const albumName = jsonObj['albumName'];
        let title = `<h2>` + albumName + `</h2>`;
        main__row__title_2.innerHTML = title;

        const songs = jsonObj['songs'];
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

var main__row__title_3 = document.getElementById("main__row__title_3");
var main__row__songs_3 = document.getElementById("main__row__songs_3");

fetch("./js/json/2020-Por.json")
    .then(response => response.json())
    .then((jsonObj) => {

        const albumName = jsonObj['albumName'];
        let title = `<h2>` + albumName + `</h2>`;
        main__row__title_3.innerHTML = title;

        const songs = jsonObj['songs'];
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