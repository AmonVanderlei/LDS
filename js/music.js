var main = document.getElementById('teste');

fetch("./js/music.json")
    .then(response => response.json())
    .then((jsonObj) => {
        const songs = jsonObj['songs'];

        for (let i = 0; i < songs.length; i++) {
            let myDiv = document.createElement('div');

            myDiv = `
            <div class="main__col" data-image="`+ songs[i].dataImage + `" data-artist="` + songs[i].dataArtist + `" data-song="` + songs[i].dataSong + `" data-file="` + songs[i].dataFile + `"><img src="` + songs[i].dataImage + `">
                <h3>`+ songs[i].songName + `</h3>
                <p>`+ songs[i].artistName + `</p>
            </div>`;

            main.innerHTML = myDiv;
            console.log(myDiv)
        }
    })