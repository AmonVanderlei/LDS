var main = document.getElementById("main__row");

fetch("./js/music.json")
    .then(response => response.json())
    .then((jsonObj) => {
        const albuns = jsonObj['albuns'];

        for (let j = 0; j < albuns.length; j++) {
            const songs = albuns[j].songs;
            
            for (let i = 0; i < songs.length; i++) {
                let myDiv = document.createElement('div');
                myDiv.setAttribute("class", "main__col");
                myDiv.setAttribute("dataImage", `${songs[i].dataImage}`)
                myDiv.setAttribute("dataArtist", `${songs[i].dataArtist}`);
                myDiv.setAttribute("dataSong", `${songs[i].dataSong}`);
                myDiv.setAttribute("dataFile", `${songs[i].dataFile}`);
    
                myDiv.innerHTML = `<img src="${songs[i].dataImage}" /><h3>${songs[i].songName}</h3><p>${songs[i].artistName}</p>`;
                main.appendChild(myDiv)
            }
        }
    })