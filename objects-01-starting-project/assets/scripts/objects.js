const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
    const movieList = document.getElementById('movie-list');

    if(movies.length === 0){
        movieList.classList.remove('visible');
    }else{
        movieList.classList.add('visible');
    }
    movieList.innerHTML = '';

    const cMovie = !filter ? movies : movies.filter(movie => movie.info.title.includes(filter));

    for(const crrMovie of cMovie){
        const newMovie = document.createElement('li');
        let text = crrMovie.info.title + ' ';
        for(const key in crrMovie.info){
            if(key !== 'title'){
                text += `${key} : ${crrMovie.info[key]}`;
            }
        }
        newMovie.textContent = text;
        movieList.append(newMovie);
    }
}

const addMovieHandler = () => {
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    const movie = {
        info : {
            title,
        [extraName] : extraValue
        }, 
        id : Math.random().toString()
    }

    movies.push(movie);
    //console.log(movies);
    renderMovies();
}

const searchMovieListener = () => {
    const filterTitle = document.getElementById('filter-title').value;
    renderMovies(filterTitle);
}

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieListener);