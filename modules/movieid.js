import { headerCreate } from "./ui";
import { getData } from "./http";
let header = document.querySelector('header')
let iframe = document.querySelector('iframe')

headerCreate(header)

let movie_id = location.search.split('=').at(-1)

getData(`/movie/popular/${movie_id}`)
    .then(res => {
        console.log(res.data);
        let movName = document.querySelector('h1')
        movName.innerHTML = item.title
    })

getData(`/movie/${movie_id}/videos`)
    .then(res => {
        let video = res.data.results[Math.floor(Math.random() * res.data.results.length)]
        iframe.src = `https://www.youtube.com/embed/${video.key}`;
    })

    
let name_movie = document.querySelector(".name_mov")
let h1 = document.querySelector("h1")
let status = document.querySelector(".status")
let p = document.querySelector("p")
let img = document.querySelector(".head img")

let year = document.querySelector(".year")
let country = document.querySelector(".country")
let tagline = document.querySelector(".tagline")
let director = document.querySelector(".director")
let scenario = document.querySelector(".scenario")
let producer = document.querySelector(".producer")
let operator = document.querySelector(".operator")
let composer = document.querySelector(".composer")
let poetry = document.querySelector(".poetry")
let mon = document.querySelector(".mon")
let genre = document.querySelector(".ganre")
let world = document.querySelector(".world")
let primer = document.querySelector(".primer")
let prim = document.querySelector(".prim")
let age = document.querySelector(".age")

let actor_box = document.createElement('div')
let actor_photo = document.createElement('img')
let actor_name = document.createElement('p')
let en_name = document.createElement('span')
let actors = document.querySelector('.actors_grid')


getData(`/movie/${movie_id}`)
.then(res => {console.log(res)
    name_movie.innerHTML = res.data.original_title
    h1.innerHTML = res.data.title
    status.innerHTML = res.data.tagline
    p.innerHTML = res.data.overview
    img.src = import.meta.env.VITE_BASE_IMG + res.data.poster_path
    year.innerHTML = res.data.release_date
    country.innerHTML = res.data.production_countries[0].name                                 
    tagline.innerHTML = res.data.tagline
    genre.innerHTML = res.data.genres[0].name
    world.innerHTML = res.data.release_date
    prim.innerHTML = res.data.release_date
    age.innerHTML = res.data.release_date
    primer.innerHTML = res.data.release_date
    
})

function reload(data) {
    

    
    }

getData(`/movie/${movie_id}/credits`)
    .then(res =>{ console.log((data));
        director.innerHTML = data.crew[1].name
    scenario.innerHTML = data.crew[1].name
    producer.innerHTML = data.crew[3].name
    operator.innerHTML = data.crew[0].name
    composer.innerHTML = data.crew[1].name
    poetry.innerHTML = data.crew[1].name
    mon.innerHTML = data.crew[1].name
    actor_photo.src = import.meta.env.VITE_BASE_IMG + res.data.cast.profile_path
    actor_name.innerHTML = res.data.cast.original_name

    })


getData(`/movie/${movie_id}/videos`)
    .then(res => { 
        let video = res.data.results[Math.floor(Math.random() * res.data.results.length)]
        iframe.src = `https://www.youtube.com/embed/${video.key}`;
        
    })
    actor_box.append(actor_photo, actor_name)
    actors.append(actor_box)


