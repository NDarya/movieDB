import axios from 'axios';
import headerCreater from '/modules/header.js';

headerCreater()
let cont = document.createElement('div')
const movieId = location.search.split('=').at(-1)

axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=353ff6e4a7bd2c7e81c13ef415f0c2dc&language=en-US`)
.then(res => console.log(res))

function reload(arr, place) {
    place.innerHTML = ""
    for(let item of arr){
        cont.style.background = item.backdrop_path
        let poster = document.createElement('div'),
            posterImg = document.createElement('img'),
            movieDetails = document.createElement('div'),
            movieTitle = document.createElement('h1'),
            eng = document.createElement('span'),
            overview = document.createElement('p'),
            trailerBox = document.createElement('div'),
            trailerBtn = document.createElement('button'),
            social = document.createElement('img');

        cont.classList.add = "movieDet"
        poster.classList.add = "poster"
        movieDetails.classList.add = "movieDetails"
        trailerBox.classList.add = "trailer"
        trailerBtn.classList.add = "trailerBtn"
    
        
        posterImg.src = `'https://image.tmdb.org/t/p/original' + ${item.poster_path}`
        social.src = `movies/img/social.svg`
        
        movieTitle.innerHTML = item.original_title
        overview.innerHTML = item.overview
        trailerBtn.innerHTML = "Смотреть трейлер"


        cont.append(poster, movieDetails)
        poster.append(posterImg)
        movieDetails.append(movieTitle, overview, trailerBox)
        trailerBox.append(trailerBtn, social)
    }
}

reload()
