var main__row__songs = document.querySelector("#main__row__songs");

fetch("../../public/scripts/json/albuns.json")
    .then(response => response.json())
    .then((jsonObj) => {

        const albuns = jsonObj['albuns'];
        for (i = 0; i < albuns.length; i++) {
            let myDiv = document.createElement('div');
            myDiv.setAttribute("class", "main__col");
            myDiv.setAttribute("dataNumber", i)
            myDiv.innerHTML = `<img src="${albuns[i].albumImage}" />
                               <h3>${albuns[i].albumName}</h3>
                               <p>${albuns[i].albumYear} - ${albuns[i].albumLanguage}</p>`;

            let myA = document.createElement('a');
            myA.setAttribute("href", "playlist.html");
            myA.appendChild(myDiv)

            main__row__songs.appendChild(myA);
        }
    })

window.setTimeout(playAndShowSong, 500);
function playAndShowSong() {
    document.querySelectorAll('.main__col').forEach(item => {

        item.addEventListener('click', () => {
            let number = item.getAttribute('dataNumber');
            localStorage.setItem('albunsIndex', number)
        });

    });
}