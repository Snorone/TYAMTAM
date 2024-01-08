import { genreFetch } from "./fetch.js";
genreFetch();
const emptyDiv = document.createElement('div');

const imageBaseUrl = `https://image.tmdb.org/t/p/w200/`;

function displayMovie(movie){
    console.log(movie);
    emptyDiv.innerHTML = '';
    for(const movieList of movie.results){
        const moviePoster = movieList.poster_path;
        const actorPoster = movieList.profile_path;
        const movieInfoDiv = document.createElement('div');
        
        if(movieList.media_type === 'movie'){
            createAndAppendElement('img', imageBaseUrl+moviePoster,movieInfoDiv);
            createAndAppendElement('h3',movieList.title,movieInfoDiv);
            createGenreElement(movieInfoDiv);

            for(const genreList of movieList.genre_ids){
                console.log(genreList);
                const genreId = document.createElement('p');
                genreId.innerText = genreList;
                movieInfoDiv.append(genreId);
            }
        }
        if(movieList.media_type === 'tv'){
            createAndAppendElement('img', imageBaseUrl+moviePoster,movieInfoDiv);
            createAndAppendElement('h3',movieList.name,movieInfoDiv);
            createGenreElement(movieInfoDiv);

            for(const genreList of movieList.genre_ids){
                console.log(genreList);
                const genreId = document.createElement('p');
                genreId.innerText = genreList;
                movieInfoDiv.append(genreId);
                }
        }
        if(movieList.media_type === 'person'){
            createAndAppendElement('img', imageBaseUrl+actorPoster,movieInfoDiv);
            createAndAppendElement('h3',movieList.name,movieInfoDiv);
        }

        emptyDiv.append(movieInfoDiv);
        document.body.append(emptyDiv);
    }
}

function createGenreElement(movieInfoDiv){
    const genreEl = document.createElement('h4');
    genreEl.innerText = 'Genre';
    movieInfoDiv.append(genreEl);
}

function createAndAppendElement(type, content, container){
    const element = document.createElement(type);
    container.append(element);

    if(type === 'img') element.src = content;
    else element.innerText = content;
    return element;
}

export{displayMovie};