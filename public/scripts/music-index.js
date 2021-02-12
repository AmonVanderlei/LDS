var numberToUse = 0;
let usedNumbers = [];

async function randomNumber(minimum, maximum) {
    const min = Math.ceil(minimum);
    const max = Math.floor(maximum);
    const random = Math.floor(Math.random() * (max - min) + min);
    if (usedNumbers.includes(random)) {
        randomNumber(min, max);
    } else {
        usedNumbers.push(random);
        numberToUse = random;
        return random
    };
};

let songsNumber = 0;

var main__row__title = document.querySelectorAll(".main__row__title")[1].innerHTML = "<h2>Últimos Lançamentos</h2>";
var main__row__songs = document.querySelectorAll(".main__row__songs")[1];

fetch("scripts/json/albuns.json")
    .then(response => response.json())
    .then((jsonObj) => {

        const albuns = jsonObj['albuns'];
        let dates = [];
        let uniqueDates = [];
        let reverseDates = [];
        let reverseSortedDates = [];
        let sortedDates = [];
        let sortedSongs = [];

        for (let i = 0; i < albuns.length; i++) {
            const songs = albuns[i].songs;
            for (let j = 0; j < songs.length; j++) {
                dates.push(albuns[i].songs[j].date)
            }
        }
        function unique(value, index, self) {
            return self.indexOf(value) === index;
        }
        uniqueDates = dates.filter(unique);
        uniqueDates.forEach(date => {
            let splited = date.split("/");
            let ordered = `${splited[2]}/${splited[1]}/${splited[0]}`;
            reverseDates.push(ordered);
        });
        reverseSortedDates = reverseDates.sort().reverse();
        for (let i = 0; i < 2; i++) {
            let splited = reverseSortedDates[i].split("/");
            let ordered = `${splited[2]}/${splited[1]}/${splited[0]}`;
            sortedDates.push(ordered);
        };
        sortedDates.forEach(date => {
            for (let i = 0; i < albuns.length; i++) {
                const songs = albuns[i].songs;
                for (let j = 0; j < songs.length; j++) {
                    if (albuns[i].songs[j].date == date) {
                        if (sortedSongs.length < 15) {
                            sortedSongs.push(albuns[i].songs[j]);
                        } else { return }
                    }
                }
            }
        });
        sortedSongs.forEach(song => {
            let myDiv = document.createElement('div');
            myDiv.setAttribute("class", "main__col");
            myDiv.setAttribute("dataImage", `${song.dataImage}`)
            myDiv.setAttribute("dataArtist", `${song.dataArtist}`);
            myDiv.setAttribute("dataSong", `${song.dataSong}`);
            myDiv.setAttribute("dataFile", `${song.dataFile}`);
            myDiv.setAttribute("dataNumber", songsNumber);

            myDiv.innerHTML = `<img alt="Imagem do Música" src="${song.dataImage}" /><h3>${song.dataSong}</h3><p>${song.dataArtist}</p>`;
            main__row__songs.appendChild(myDiv)
            songsNumber++
        })
    })

function showRow(currentNumber) {
    var all_main__row__title = document.querySelectorAll(".main__row__title");
    var main__row__title = all_main__row__title[currentNumber];
    var all_main__row__songs = document.querySelectorAll(".main__row__songs");
    var main__row__songs = all_main__row__songs[currentNumber];

    fetch("scripts/json/albuns.json")
        .then(response => response.json())
        .then((jsonObj) => {

            const albuns = jsonObj['albuns'];
            async function showAlbum() {
                await randomNumber(0, albuns.length);
                const albumName = albuns[numberToUse].albumName;
                let title = `<h2>` + albumName + `</h2>`;
                main__row__title.innerHTML = title;

                const songs = albuns[numberToUse].songs;
                for (let i = 0; i < songs.length; i++) {
                    let myDiv = document.createElement('div');
                    myDiv.setAttribute("class", "main__col");
                    myDiv.setAttribute("dataImage", `${songs[i].dataImage}`)
                    myDiv.setAttribute("dataArtist", `${songs[i].dataArtist}`);
                    myDiv.setAttribute("dataSong", `${songs[i].dataSong}`);
                    myDiv.setAttribute("dataFile", `${songs[i].dataFile}`);
                    myDiv.setAttribute("dataNumber", songsNumber);

                    myDiv.innerHTML = `<img alt="Imagem do Música" src="${songs[i].dataImage}" /><h3>${songs[i].dataSong}</h3><p>${songs[i].dataArtist}</p>`;
                    main__row__songs.appendChild(myDiv)
                    songsNumber++
                }
            }
            showAlbum()
        })
}

for (let i = 2; i < 4; i++) {
    showRow(i)
}