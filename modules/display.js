import { genreFetch } from "./fetch.js";
genreFetch();
const emptyDiv = document.createElement('div');

const imageBaseUrl = `https://image.tmdb.org/t/p/w200/`;

function displayMovie(movie){
    console.log(movie);
    emptyDiv.innerHTML = '';
    console.log(movie);
    for(const movieList of movie.results){
        const moviePoster = movieList.poster_path;
        const actorPoster = movieList.profile_path;
        console.log(actorPoster);
        const movieInfoDiv = document.createElement('div');
        
        
        if(movieList.media_type === 'movie'){
            createAndAppendElement('img', imageBaseUrl+moviePoster,movieInfoDiv);
            createAndAppendElement('h3',movieList.title,movieInfoDiv);
            for(const genreList of movieList.genre_ids){
                console.log(genreList);
                const genreId = document.createElement('p');
                genreId.innerText = genreList;
                movieInfoDiv.append(genreId);
            }
        }
        else if(movieList.media_type === 'person' || movieList.media_type === 'tv'){
            createAndAppendElement('img', imageBaseUrl+actorPoster,movieInfoDiv);
            createAndAppendElement('h3',movieList.name,movieInfoDiv);
        }

        const genreEl = document.createElement('h4');
        genreEl.innerText = 'Genre';
        movieInfoDiv.append(genreEl);
        if(movieList.media_type === 'person'){
            genreEl.remove();
        }   
    
        emptyDiv.append(movieInfoDiv);
        document.body.append(emptyDiv);
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