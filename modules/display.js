const imageBaseUrl = `https://image.tmdb.org/t/p/w200/`;
function displayMovie(movie){
    console.log(movie);
    for(const movieList of movie.results){
        const moviePoster = movieList.poster_path;
        const movieInfoDiv = document.createElement('div');
        createAndAppendElement('img', imageBaseUrl+moviePoster,movieInfoDiv);
        
        if(movieList.media_type === 'movie'){
            createAndAppendElement('h3',movieList.title,movieInfoDiv);
        }
        else{
            createAndAppendElement('h3',movieList.name,movieInfoDiv);
        }

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