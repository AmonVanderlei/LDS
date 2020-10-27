var table__body = document.querySelector(".table__body");

fetch("./js/json/albuns.json")
    .then(response => response.json())
    .then((jsonObj) => {

        const albuns = jsonObj['albuns'];
        console.log(albuns)
        for (let i = 0; i < albuns.length; i++) {
            let myTr = document.createElement('tr');
            let myFirstTd = document.createElement('td');
            let mySecondTd = document.createElement('td');
            let myThirdTd = document.createElement('td');
            let myImg = document.createElement('img');
            let myFirstP = document.createElement('p');
            let mySecondP = document.createElement('p');

            for (let j = 0; j < albuns[i].songs.length; j++) {
                myImg.setAttribute("src", albuns[i].songs[j].dataImage);
                myFirstP.innerHTML = albuns[i].songs[j].songName;
                mySecondP.innerHTML = albuns[i].songs[j].artistName;
                myFirstTd.appendChild(myImg);
                mySecondTd.appendChild(myFirstP);
                myThirdTd.appendChild(mySecondP);
                myTr.appendChild(myFirstTd);
                myTr.appendChild(mySecondTd);
                myTr.appendChild(myThirdTd);
                table__body.appendChild(myTr);
            }
        }
    })