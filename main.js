import headerCreater from '/modules/header.js';

headerCreater()

let cont = document.querySelector('.container')
let nowGenres = document.createElement('div')
let h2 = document.createElement('h2')
let line = document.createElement('span')
let genLinks = document.createElement('div')
let all = document.createElement('a')
let action = document.createElement('a')
let adventure = document.createElement('a')
let comedy = document.createElement('a')
let fant = document.createElement('a')
let thriller = document.createElement('a')
let drama = document.createElement('a')


h2.innerHTML = "Сейчас в кино"
all.innerHTML = "Все"
action.innerHTML = "Боевики"
adventure.innerHTML = "Приключения"
comedy.innerHTML = "Комедии"
fant.innerHTML = "Фантастика"
thriller.innerHTML = "Триллер"
drama.innerHTML = "Драма"

all.href = '#'
action.href = '#'
adventure.href = '#'
comedy.href = '#'
fant.href = '#'
thriller.href = '#'

genLinks.append(all, action, adventure, comedy, fant, thriller, drama)
nowGenres.append(h2, line, genLinks)
cont.prepend(nowGenres)

axios.get('https://api.themoviedb.org/3/movie/popular?api_key=353ff6e4a7bd2c7e81c13ef415f0c2dc')
    .then(res => reload(res.data.results, cont))

function reload(arr,place) {
    place.innerHTML = ""
    console.log(arr);

    for(let item of arr) {
        cont.style.background = item.backdrop_path
        place.innerHTML += `
            <div class="item">
                <img src="${"https://image.tmdb.org/t/p/original" + item.poster_path}" alt="">
                <a href="/pages/movieinfo.html?id=${item.id}">${item.original_title}</a>
               
            </div>
        `
        
    }
}

//  <a href="${"https://api.themoviedb.org/3/genre/movie/list?api_key=353ff6e4a7bd2c7e81c13ef415f0c2dc" + item.genre_ids}"}>${item.genre_ids}</a>