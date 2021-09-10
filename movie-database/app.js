const addMovieModal = document.getElementById('add-modal');
const startAddMovieBtn = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const modalCancelbtn = document.querySelector('.modal__actions').firstElementChild;
const modalAddBtn = document.querySelector('.modal__actions').lastElementChild;
const userInput = addMovieModal.querySelectorAll('input');
const movieList = [];
const entryTextSection = document.getElementById('entry-text');


const updateUI = () => {
    if(movieList.length === 0){
        entryTextSection.style.display = 'block';
    }else{
        entryTextSection.style.display = 'none';
    }
}

const deleteMovie = (movieID) => {
    let count = 0;
    for(const cMovie of movieList){
        if(cMovie.Id===movieID){
            break;
        }else{
            count++;
        }
    }
    movieList.splice(count,1);
    const listMovies = document.getElementById('movie-list');
    listMovies.children[count].remove();
}

const deleteMovieListener = (movieID) => {
    const deleteModal = document.getElementById('delete-modal');
    deleteModal.classList.add('visible');
    toggleBackdrop();
    //deleteMovie(movieID);
}

const renderMovies = (id, movieTitle, imageURL, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
        <div class = "movie-element__image">
        <img src = "${imageURL}" alt = "${movieTitle}">
        </div>
        <div class = "movie-element__info">
            <h2>${movieTitle}</h2>
            <p>${rating}/5 Star</p>
        </div>
    `;
    const movieList = document.getElementById('movie-list');
    movieList.append(newMovieElement);
    newMovieElement.addEventListener('click', deleteMovieListener.bind(null, id));
}

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

const closeMovieModal = () => {
    addMovieModal.classList.remove('visible');
}

const showMovieModal = () => {
    addMovieModal.classList.add('visible');
    toggleBackdrop();
}

const backdropClickHandler = () => {
    closeMovieModal();
}

const cancelMovieHandler = () => {
    closeMovieModal();
    clearMovieInputs();
}

const clearMovieInputs = () => {
    for(let usrInput of userInput){
        usrInput.value = '';
    }
}

const addMovieHandler = () => {
    const movieTitle = userInput[0].value.trim();
    const imageURL = userInput[1].value.trim();
    const rating = userInput[2].value;
    const id = Math.random().toString();

    if(movieTitle === '' || imageURL === '' || rating === '' || rating < 1 || rating > 5){
        alert('Please enter valid input!!');
        clearMovieInputs();
    }else{
        const newMovie = {
            Id : id,
            Title : movieTitle,
            URL : imageURL,
            Rating : rating
        };
        movieList.push(newMovie);
        console.log(movieList);
        clearMovieInputs();
        updateUI();
        //deleteMovieListener(id);
        renderMovies(id, movieTitle,imageURL,rating);
        closeMovieModal();
    }
    
}

startAddMovieBtn.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
modalCancelbtn.addEventListener('click', cancelMovieHandler);
modalAddBtn.addEventListener('click', addMovieHandler);