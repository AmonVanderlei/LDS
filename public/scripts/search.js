var main__row__songs = document.querySelector("#main__row__songs");
let elements = [];

fetch("../scripts/json/albuns.json")
    .then(response => response.json())
    .then((jsonObj) => {

        const albuns = jsonObj['albuns'];
        var songsIndex = 0;
        for (j = 0; j < albuns.length; j++) {
            const songs = albuns[j].songs;
            for (let i = 0; i < songs.length; i++) {
                let myDiv = document.createElement('div');
                myDiv.setAttribute("class", "main__col");
                myDiv.setAttribute("dataImage", `${songs[i].dataImage}`)
                myDiv.setAttribute("dataArtist", `${songs[i].dataArtist}`);
                myDiv.setAttribute("dataSong", `${songs[i].dataSong}`);
                myDiv.setAttribute("dataFile", `${songs[i].dataFile}`);
                myDiv.setAttribute("dataNumber", songsIndex);

                myDiv.innerHTML = `<img alt="Imagem do Música" src="${songs[i].dataImage}" /><h3>${songs[i].dataSong}</h3><p>${songs[i].dataArtist}</p>`;

                elements.push(myDiv)
                main__row__songs.appendChild(myDiv)
                songsIndex++
            }
        }
    })

const debounceEvent = (fn, wait = 1000, time) => (...args) => {
    clearTimeout(time, time = setTimeout(() => fn(...args), wait))
}

function handleKeyUp(event) {
    let wrote = event.target.value.toLowerCase();
    let = filtered = [];
    elements.forEach(element => {
        if (element.attributes.datasong.value.toLowerCase().indexOf(wrote) != -1) {
            filtered.push(element)
        }
    });
    createMainCol(filtered)
}

function createMainCol(filteredElements) {
    main__row__songs.innerHTML = "";
    songsIndex = 0;
    filteredElements.forEach(element => {
        element.setAttribute("dataNumber", songsIndex);
        main__row__songs.appendChild(element)
        songsIndex++
    });
}

document.querySelector(".filter").addEventListener("keyup", debounceEvent(handleKeyUp, 500))