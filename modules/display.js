import { genreFetch } from "./fetch.js";

// const emptyDiv = document.createElement("div");
const imageBaseUrl = `https://image.tmdb.org/t/p/original/`;

const mainDivEl = document.querySelector('#mainContainer');
const flexContainerEl = document.querySelector('#flexContainer');

function displayMovie(movie) {
  console.log(movie);
  flexContainerEl.innerHTML = "";
  for (const movieList of movie.results) {
    const moviePoster = movieList.poster_path;
    const actorPoster = movieList.profile_path;
    const movieInfoDiv = document.createElement("div");

    if (movieList.media_type === "movie" || movieList.media_type === "tv") {
      if (moviePoster !== null) {
        createAndAppendElement("img", imageBaseUrl + moviePoster, movieInfoDiv);
        if (movieList.media_type === "movie") {
          createAndAppendElement("h3", movieList.title, movieInfoDiv);
        }
        if (movieList.media_type === "tv") {
          createAndAppendElement("h3", movieList.name, movieInfoDiv);
        }
        createGenreElement(movieInfoDiv);
      } else {
        const whenIsNoImage = `./assets/no_image.svg`;
        console.log(whenIsNoImage);
        createNoImageElement(whenIsNoImage, movieInfoDiv);
        createAndAppendElement("h3", movieList.title, movieInfoDiv);
        createGenreElement(movieInfoDiv);
      }

      for (const genreList of movieList.genre_ids) {
        // console.log(genreList);
        genreFetch(genreList).then((getGenre) => {
          //console.log(id);
          for (const genreArr of getGenre.genres) {
            //console.log(genreArr.id);
            if (genreArr.id === genreList) {
              //   console.log(genreArr.name);
              const genreId = document.createElement("p");
              genreId.innerText = genreArr.name;
              movieInfoDiv.append(genreId);
            }
          }
        });
      }
    }

    if (movieList.media_type === "person") {
      if (actorPoster !== null) {
        createAndAppendElement("img", imageBaseUrl + actorPoster, movieInfoDiv);
        createAndAppendElement("h3", movieList.name, movieInfoDiv);
      } else {
        const whenIsNoImage = `./assets/no_image.svg`;
        console.log(whenIsNoImage);
        createNoImageElement(whenIsNoImage, movieInfoDiv);
        createAndAppendElement("h3", movieList.name, movieInfoDiv);
      }
    }

    flexContainerEl.append(movieInfoDiv);
    mainDivEl.append(flexContainerEl);
  }
}

export function displayRandomTopRated(movie){
    flexContainerEl.innerHTML = "";
    console.log(movie);

    for(let i = 0; i < 5 ; i++){
        console.log(i);
        const movieInfoDiv = document.createElement("div");
        const moviePoster = movie.results[i].poster_path;
        console.log(moviePoster);
        createAndAppendElement('img',imageBaseUrl +moviePoster, movieInfoDiv);
        createAndAppendElement('h3', movie.results[i].title, movieInfoDiv);
        flexContainerEl.append(movieInfoDiv);
        mainDivEl.append(flexContainerEl);
       
    }
    // for(const movieList of movie.results){
    //     const movieInfoDiv = document.createElement("div");
    //     const moviePoster = movieList.poster_path;
    //     console.log(movieList);
    //     createAndAppendElement('img',imageBaseUrl +moviePoster, movieInfoDiv);
    //     flexContainerEl.append(movieInfoDiv);
    //     mainDivEl.append(flexContainerEl);
    // }

}

export function displayRandomMovie(movie) {
    flexContainerEl.innerHTML = "";
    // console.log(movie.results[0]);
    const randomNumber = Math.floor(Math.random() * 20);
    console.log(randomNumber);
    const movieInfoDiv = document.createElement("div");

    console.log(movie.results[`${randomNumber}`]);
    createAndAppendElement('img',imageBaseUrl + movie.results[`${randomNumber}`].poster_path, movieInfoDiv);
    createAndAppendElement('h3', movie.results[`${randomNumber}`].title,movieInfoDiv);
    createAndAppendElement('p', movie.results[`${randomNumber}`].overview,movieInfoDiv)
    createGenreElement(movieInfoDiv);
    for (const genreList of movie.results[`${randomNumber}`].genre_ids) {
        // console.log(genreList);
        genreFetch(genreList).then((getGenre) => {
          //console.log(id);
          for (const genreArr of getGenre.genres) {
            //console.log(genreArr.id);
            if (genreArr.id === genreList) {
              //   console.log(genreArr.name);
              const genreId = document.createElement("p");
              genreId.innerText = genreArr.name;
              movieInfoDiv.append(genreId);
            }
          }
        });
      }
      flexContainerEl.append(movieInfoDiv);
      mainDivEl.append(flexContainerEl);
}

function createNoImageElement(image, append) {
  const noImage = document.createElement("img");
  noImage.src = image;
  append.append(noImage);
}

function createGenreElement(movieInfoDiv) {
  const genreEl = document.createElement("h4");
  genreEl.innerText = "Genre";
  movieInfoDiv.append(genreEl);
}

function createAndAppendElement(type, content, container) {
  const element = document.createElement(type);
  container.append(element);

  if (type === "img") element.src = content;
  else element.innerText = content;
  return element;
}

export { displayMovie };
