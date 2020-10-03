var main = document.getElementsByClassName('main__row');

fetch("./js/music.json")
    .then(response => response.json())
    .then((jsonObj) => {
        const songs = jsonObj['songs'];

        for (let i = 0; i < 10; i++) {
            let myDiv = document.createElement('div');
            myDiv = `
            <div class="main__col" data-image="`+ songs[i].dataImage + `" data-artist="` + songs[i].dataArtist + `" data-song="` + songs[i].dataSong + `" data-file="` + songs[i].dataFile + `"><img src="` + songs[i].dataImage + `">
                <h3>`+ songs[i].songName + `</h3>
                <p>`+ songs[i].artistName + `</p>
            </div>`;
            main.innerHTML = myDiv;
        }
    })