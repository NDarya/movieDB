import { getData } from './http';

export function headerCreate(place) {
	place.innerHTML = ''
	place.innerHTML = `
		<div class="left">
			<a href='/'>
				<img src="/public/images/logo.svg" alt="image">
			</a>
			<img src="/public/images/menu.svg" alt="image">
		</div>
		<nav>
			<a href="#">Афиша</a>
			<a href="#">Медиа</a>
			<a href="#">Фильмы</a>
			<a href="#">Актёры</a>
			<a href="#">Новости</a>
			<a href="#">Подборки</a>
			<a href="#">Категории</a>
		</nav>
		<div class="right">
			<button>
				<img src="/public/icons/search.svg" alt="icon">
			</button>
			<button>Войти</button>
		</div>
    `
	
}

let genres

getData('/genre/movie/list')
	.then(({ data }) => genres = data.genres)

export function reload(arr, place) {
	place.innerHTML = ''
	for (let item of arr) {
		let genre_str = ''
		for (let genre of genres) {
			for (let id of item.genre_ids) {
				if(id === genre.id){
					genre_str += ` ${genre.name},`
				}
			}
		}
		place.innerHTML += `
			<div class="movie-card" >
				<div class="image">
					<img src="${import.meta.env.VITE_BASE_IMG + item.poster_path}" alt="image">
					<span>${item.vote_average}</span>
					<a href="/pages/movieid.html?id=${item.id}">
						<button>Карточка фильма</button>
					</a>
				</div>
				<div class="name__genre">
					<p>${item.title}</p>
					<p>${genre_str}</p>
				</div>
			</div>
			`
	}
}

export function reloadTrailerCart(arr, place) {
	place.innerHTML = ''
	for (let item of arr) {
		place.innerHTML += `
		<div class="trailers__footer-item" data-id='${item.id}'>
			<div class="trailers__vid trailers__vid_mini">
				<img class="trailers__iframe trailers__iframe_small" src="${import.meta.env.VITE_BASE_IMG + item.poster_path}" alt='image'>
				<img class="trailers_play-icon trailers_play-icon_mini" src="/public/icons/play.svg" alt="icon">
			</div>
			<p class="trailers__title trailers__title_small">${item.title.split('.').at(0)}</p>
		</div>
		`
	}
}

export function reloadPopularPerson(arr, place) {
	place.innerHTML = ''
	if (arr.length === 2) {
		for (let item of arr) {
			place.innerHTML += `
			<div class="popular-persons__box">
				<img class="popular-persons__photo" src="${import.meta.env.VITE_BASE_IMG + item.profile_path}" alt="image">
				<div class="popular-persons__num">${arr.indexOf(item) + 1}-е место</div>
				<div class="popular-persons__box-item">
					<div class="popular-persons__name">${item.name}</div>
					<div class="popular-persons__name_eng">${item.name}</div>
					<div class="popular-persons__age">${item.age}</div>
				</div>
			</div>
			`
		}
	} else {
		for (let item of arr) {
			place.innerHTML += `
		<div class="popular-persons__cart">
			<div class="popular-persons__cart-item">
				<div class="popular-persons__name">${item.name}</div>
				<div class="popular-persons__name_eng">${item.name}</div>
				<div class="popular-persons__age">${item.age}</div>
			</div>
			<div class="popular-persons__num">${arr.indexOf(item) + 3}-е место</div>
		</div>
		`
		}
	}
}