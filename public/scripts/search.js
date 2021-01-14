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

let filter1 = document.querySelector('#filter1');
let filter1label = document.querySelector('.filter1label');
let filter1Children = document.querySelectorAll('.filter1-children');
let filter2 = document.querySelector('#filter2');
let filter2label = document.querySelector('.filter2label');
let filter2Children = document.querySelectorAll('.filter2-children');

filter1label.addEventListener('click', (e) => {
    e.preventDefault();

    if (filter1.checked == true) {
        filter1Children[0].classList.remove('green');
        filter1Children[1].classList.remove('green');
        filter1.checked = false;
    } else {
        filter1Children[0].classList.add('green');
        filter1Children[1].classList.add('green');
        filter1.checked = true;
        if (filter2.checked == true) {
            filter2Children[0].classList.remove('green');
            filter2Children[1].classList.remove('green');
            filter2.checked = false;
        }
    }
    if (filter1.checked == true) {
        sortAZElements()
    } else {
        if (document.querySelector(".filter").value != "") {
            let wrote = document.querySelector(".filter").value;
            if (matchCase == false) {
                wrote = wrote.toLowerCase();
            }
            let = filtered = [];
            elements.forEach(element => {
                let name = element.attributes.datasong.value;
                if (matchCase == false) {
                    name = name.toLowerCase();
                }
                if (name.indexOf(wrote) != -1) {
                    filtered.push(element)
                }
            });
            createMainCol(filtered)
        } else {
            createMainCol(elements)
        }
    }
    return false;
});

filter2label.addEventListener('click', (e) => {
    e.preventDefault();

    if (filter2.checked == true) {
        filter2Children[0].classList.remove('green');
        filter2Children[1].classList.remove('green');
        filter2.checked = false;
    } else {
        filter2Children[0].classList.add('green');
        filter2Children[1].classList.add('green');
        filter2.checked = true;
        if (filter1.checked == true) {
            filter1Children[0].classList.remove('green');
            filter1Children[1].classList.remove('green');
            filter1.checked = false;
        }
    }

    if (filter2.checked == true) {
        sortZAElements()
    } else {
        if (document.querySelector(".filter").value != "") {
            let wrote = document.querySelector(".filter").value;
            if (matchCase == false) {
                wrote = wrote.toLowerCase();
            }

            let = filtered = [];
            elements.forEach(element => {
                let name = element.attributes.datasong.value;
                if (matchCase == false) {
                    name = name.toLowerCase();
                }

                if (name.indexOf(wrote) != -1) {
                    filtered.push(element)
                }
            });
            createMainCol(filtered)
        } else {
            createMainCol(elements)
        }
    }
    return false;
});

let matchCaseInput = document.querySelector('#matchCase');
let matchCase = false;

document.querySelector('.matchCaseLabel').addEventListener('click', (e) => {
    e.preventDefault();
    if (matchCaseInput.checked == true) {
        matchCaseInput.checked = false;
    } else {
        matchCaseInput.checked = true;
    }
    if (matchCaseInput.checked) {
        matchCase = true;
        if (document.querySelector(".filter").value != "") {
            let wrote = document.querySelector(".filter").value;
            if (matchCase == false) {
                wrote = wrote.toLowerCase();
            }

            let = filtered = [];
            elements.forEach(element => {
                let name = element.attributes.datasong.value;
                if (matchCase == false) {
                    name = name.toLowerCase();
                }

                if (name.indexOf(wrote) != -1) {
                    filtered.push(element)
                }
            });
            createMainCol(filtered)
            if (filter1.checked == true) {
                sortAZElements()
            }
            if (filter2.checked == true) {
                sortZAElements()
            }
        }
    } else {
        matchCase = false;
        if (document.querySelector(".filter").value != "") {
            let wrote = document.querySelector(".filter").value;
            if (matchCase == false) {
                wrote = wrote.toLowerCase();
            }

            let = filtered = [];
            elements.forEach(element => {
                let name = element.attributes.datasong.value;
                if (matchCase == false) {
                    name = name.toLowerCase();
                }

                if (name.indexOf(wrote) != -1) {
                    filtered.push(element)
                }
            });
            createMainCol(filtered)
            if (filter1.checked == true) {
                sortAZElements()
            }
            if (filter2.checked == true) {
                sortZAElements()
            }
        }
    }
    return false;
})

const debounceEvent = (fn, wait = 1000, time) => (...args) => {
    clearTimeout(time, time = setTimeout(() => fn(...args), wait))
}

function handleKeyUp(event) {
    let wrote = event.target.value;
    if (matchCase == false) {
        wrote = wrote.toLowerCase();
    }
    let = filtered = [];
    elements.forEach(element => {
        let name = element.attributes.datasong.value;
        if (matchCase == false) {
            name = name.toLowerCase();
        }
        if (name.indexOf(wrote) != -1) {
            filtered.push(element)
        }
    });
    createMainCol(filtered)
    if (filter1.checked == true) {
        sortAZElements()
    }
    if (filter2.checked == true) {
        sortZAElements()
    }
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

function sortAZElements() {
    let elementsNodeList = document.querySelectorAll('.main__col');
    let elementsToSort = Array.from(elementsNodeList);

    let elementsName = [];
    elementsToSort.forEach(element => {
        elementsName.push(element.attributes.datasong.value);
    });
    let sortedElementsName = elementsName.sort();

    let sortedElements = []
    sortedElementsName.forEach(sortedElementName => {
        elementsToSort.forEach(element => {
            if (sortedElementName == element.attributes.datasong.value) {
                sortedElements.push(element);
            }
        })
    })
    createMainCol(sortedElements)
}

function sortZAElements() {
    let elementsNodeList = document.querySelectorAll('.main__col');
    let elementsToSort = Array.from(elementsNodeList);

    let elementsName = [];
    elementsToSort.forEach(element => {
        elementsName.push(element.attributes.datasong.value);
    });
    let sortedElementsName = elementsName.sort();

    let sortedElements = []
    sortedElementsName.forEach(sortedElementName => {
        elementsToSort.forEach(element => {
            if (sortedElementName == element.attributes.datasong.value) {
                sortedElements.push(element);
            }
        })
    })
    let sortedZAElements = sortedElements.slice(0).reverse();
    createMainCol(sortedZAElements)
}