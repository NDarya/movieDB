function headerCreater() {
    let body = document.body
    let header = document.createElement('header')
    let left = document.createElement('div')
    let middle = document.createElement('div')
    let right = document.createElement('div')
    let logo = document.createElement('img')
    let social = document.createElement('img')

    let afisha = document.createElement('a')
    let media = document.createElement('a')
    let films = document.createElement('a')
    let actors = document.createElement('a')
    let news = document.createElement('a')
    let pickup = document.createElement('a')
    let category = document.createElement('a')

    let search = document.createElement('button')
    let searchImg = document.createElement('img')
    let signIn = document.createElement('button')

    left.classList.add('left')
    middle.classList.add('middle')
    right.classList.add('right')
    search.classList.add('searchBtn')
    signIn.classList.add('signIn')
    logo.classList.add('logo')
    social.classList.add('social')

    logo.src = `/img/logo.svg`
    social.src = `/img/social.svg`
    searchImg.src = `/img/search.svg`

    afisha.innerHTML = "Афиша"
    media.innerHTML = "Медиа"
    films.innerHTML = "Фильмы"
    actors.innerHTML = "Актеры"
    news.innerHTML = "Новости"
    pickup.innerHTML = "Подборки"
    category.innerHTML = "Категории"
    signIn.innerHTML = "Войти"

    afisha.href = "#"
    media.href = "#"
    films.href = "#"
    actors.href = "#"
    news.href = "#"
    pickup.href = "#"
    category.href = "#"
    signIn.href = "#"


    body.prepend(header)
    header.append(left, middle, right)
    left.append(logo, social)
    middle.append(afisha, media, films, actors, news, pickup, category)
    right.append(search, signIn)
    search.append(searchImg)

}



export default headerCreater