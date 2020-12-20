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

                    myDiv.innerHTML = `<img src="${songs[i].dataImage}" /><h3>${songs[i].dataSong}</h3><p>${songs[i].dataArtist}</p>`;
                    main__row__songs.appendChild(myDiv)
                }
            }
            showAlbum()
        })
}

for (let i = 0; i < 4; i++) {
    showRow(i)
}