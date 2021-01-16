let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let star = document.querySelector('.star');
star.onclick = () => updateAll();

function getState() {
    const musicName = document.querySelector('.player__artist h3').innerHTML.split('<br>')[0];
    const index = favorites.indexOf(musicName)
    const existsInLocalStorage = index != -1

    return { musicName, index, existsInLocalStorage }
}

function updateAll() {
    updateFavorites()
    updateClasses()
}

function updateFavorites() {
    const { musicName, index, existsInLocalStorage } = getState()
    if (existsInLocalStorage) {
        favorites.splice(index, 1)
    } else {
        favorites.push(musicName)
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

function updateClasses() {
    const { existsInLocalStorage } = getState()
    star.classList.remove('fav')
    if (existsInLocalStorage) {
        star.classList.add('fav')
    }
}

function updateSongs() {
    setTimeout(() => {updateClasses()}, 1000)
}