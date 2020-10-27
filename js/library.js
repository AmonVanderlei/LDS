var main__row__songs = document.querySelector("#main__row__songs");

fetch("./js/json/albuns.json")
    .then(response => response.json())
    .then((jsonObj) => {

        const albuns = jsonObj['albuns'];
        for (let i = 0; i < albuns.length; i++) {
            let myDiv = document.createElement('div');
            myDiv.setAttribute("class", "main__col");
            myDiv.innerHTML = `<img src="${albuns[i].albumImage}" /><h3>${albuns[i].albumName}</h3><p>${albuns[i].albumYear} - ${albuns[i].albumLanguage}</p>`;

            let myA = document.createElement('a');
            myA.setAttribute("href", albuns[i].albumPage);
            myA.appendChild(myDiv)

            main__row__songs.appendChild(myA);
        }
    })