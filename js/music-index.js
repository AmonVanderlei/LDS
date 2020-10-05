var main__row = document.getElementById("main__row");

fetch("./js/json/2020-Eng.json")
    .then(response => response.json())
    .then((jsonObj) => {

        const albumName = jsonObj['albumName'];
        let titleDiv = document.createElement('div');
        let title = `<h2>` + albumName + `</h2>`;
        titleDiv.setAttribute("class", "main__row__title");
        titleDiv.setAttribute("id", "main__row__title");
        titleDiv.innerHTML = title;
        main__row.appendChild(titleDiv);

        const songs = jsonObj['songs'];
        for (let i = 0; i < songs.length; i++) {
            let myDiv = document.createElement('div');
            myDiv.setAttribute("class", "main__col");
            myDiv.setAttribute("dataImage", `${songs[i].dataImage}`)
            myDiv.setAttribute("dataArtist", `${songs[i].dataArtist}`);
            myDiv.setAttribute("dataSong", `${songs[i].dataSong}`);
            myDiv.setAttribute("dataFile", `${songs[i].dataFile}`);

            myDiv.innerHTML = `<img src="${songs[i].dataImage}" /><h3>${songs[i].songName}</h3><p>${songs[i].artistName}</p>`;
            main__row.appendChild(myDiv)
        }
    })

var main__row = document.getElementById("main__row");

fetch("./js/json/2020-Por.json")
    .then(response => response.json())
    .then((jsonObj) => {

        const albumName = jsonObj['albumName'];
        let titleDiv = document.createElement('div');
        let title = `<h2 style="margin-top: 20px">` + albumName + `</h2>`;
        titleDiv.setAttribute("class", "main__row__title");
        titleDiv.setAttribute("id", "main__row__title");
        titleDiv.innerHTML = title;
        main__row.appendChild(titleDiv);

        const songs = jsonObj['songs'];
        for (let i = 0; i < songs.length; i++) {
            let myDiv = document.createElement('div');
            myDiv.setAttribute("class", "main__col");
            myDiv.setAttribute("dataImage", `${songs[i].dataImage}`)
            myDiv.setAttribute("dataArtist", `${songs[i].dataArtist}`);
            myDiv.setAttribute("dataSong", `${songs[i].dataSong}`);
            myDiv.setAttribute("dataFile", `${songs[i].dataFile}`);

            myDiv.innerHTML = `<img src="${songs[i].dataImage}" /><h3>${songs[i].songName}</h3><p>${songs[i].artistName}</p>`;
            main__row.appendChild(myDiv)
        }
    })
var main__row = document.getElementById("main__row");

fetch("./js/json/2019-Eng.json")
    .then(response => response.json())
    .then((jsonObj) => {

        const albumName = jsonObj['albumName'];
        let titleDiv = document.createElement('div');
        let title = `<h2 style="margin-top: 20px">` + albumName + `</h2>`;
        titleDiv.setAttribute("class", "main__row__title");
        titleDiv.setAttribute("id", "main__row__title");
        titleDiv.innerHTML = title;
        main__row.appendChild(titleDiv);

        const songs = jsonObj['songs'];
        for (let i = 0; i < songs.length; i++) {
            let myDiv = document.createElement('div');
            myDiv.setAttribute("class", "main__col");
            myDiv.setAttribute("dataImage", `${songs[i].dataImage}`)
            myDiv.setAttribute("dataArtist", `${songs[i].dataArtist}`);
            myDiv.setAttribute("dataSong", `${songs[i].dataSong}`);
            myDiv.setAttribute("dataFile", `${songs[i].dataFile}`);

            myDiv.innerHTML = `<img src="${songs[i].dataImage}" /><h3>${songs[i].songName}</h3><p>${songs[i].artistName}</p>`;
            main__row.appendChild(myDiv)
        }
    })
    var main__row = document.getElementById("main__row");

    fetch("./js/json/2019-Por.json")
        .then(response => response.json())
        .then((jsonObj) => {
    
            const albumName = jsonObj['albumName'];
            let titleDiv = document.createElement('div');
            let title = `<h2 style="margin-top: 20px">` + albumName + `</h2>`;
            titleDiv.setAttribute("class", "main__row__title");
            titleDiv.setAttribute("id", "main__row__title");
            titleDiv.innerHTML = title;
            main__row.appendChild(titleDiv);
    
            const songs = jsonObj['songs'];
            for (let i = 0; i < songs.length; i++) {
                let myDiv = document.createElement('div');
                myDiv.setAttribute("class", "main__col");
                myDiv.setAttribute("dataImage", `${songs[i].dataImage}`)
                myDiv.setAttribute("dataArtist", `${songs[i].dataArtist}`);
                myDiv.setAttribute("dataSong", `${songs[i].dataSong}`);
                myDiv.setAttribute("dataFile", `${songs[i].dataFile}`);
    
                myDiv.innerHTML = `<img src="${songs[i].dataImage}" /><h3>${songs[i].songName}</h3><p>${songs[i].artistName}</p>`;
                main__row.appendChild(myDiv)
            }
        })