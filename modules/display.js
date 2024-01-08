const imageBaseUrl = `https://image.tmdb.org/t/p/w400/`;
function displayMovie(movie){
    //console.log(movie);
    for(const movieList of movie.results){
        //console.log(movieList);
        const moviePoster = movieList.poster_path;
        console.log(moviePoster);
        const movieInfoDiv = document.createElement('div');
        document.body.append(movieInfoDiv);
    }
}

function createAndAppendElement(type, content, container){
    const element = document.createElement(type);
    container.append(element);

    if(type === 'img') element.src = content;
    else element.innerText = content;
    return element;
}

export{displayMovie};