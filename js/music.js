var main = document.getElementsByClassName('main__row');

fetch("./js/music.json")
    .then(response => response.json())
    .then((jsonObj) => {
        const albuns = jsonObj['albuns'];

        for (let i = 0; i < 10; i++) {
            const songs = albuns[i].songs;
            console.log(songs)
            let myDiv = document.createElement('div');
            myDiv.setAttribute("class", "main__col");
            myDiv.setAttribute("dataImage", `${songs[i].dataImage}`)
            myDiv.setAttribute("dataArtist", songs[i].dataArtist);
            myDiv.setAttribute("dataSong", songs[i].dataSong);
            myDiv.setAttribute("dataFile", songs[i].dataFile);
            console.log(myDiv);

            let text = document.createTextNode(`<img src="${songs[i].dataImage}">
           <h3>${songs[i].songName}</h3>
           <p>${songs[i].artistName}</p>`)
            myDiv.appendChild(text)
            document.main.appendChild(myDiv)
        }
    })