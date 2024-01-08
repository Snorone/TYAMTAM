const BAERER_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmEzMGUzMDUxNDk2MzYzMGIzZjBmMTFlNDVjZmZlZiIsInN1YiI6IjY1ODAwNTQ0MGU2NGFmMDgzOWE4NTY2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mXFG31A3Gc9TIa9a-tDRXc2PwfYME01u_gmyEt5ipL4";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${BAERER_KEY}`,
    },
  };


export async function fetchInfo(userSearch) {
  //console.log(userSearch);
  const url = `https://api.themoviedb.org/3/search/multi?query=${userSearch}&include_adult=false&language=en-US&page=1`;
  //console.log(url);

  //   const sectionDiv = document.querySelector("section");
  //   sectionDiv.innerHTML = "";
  const response = await fetch(url, options);
  if (response.ok) {
    const data = await response.json();
    //console.log(data);

    if (data.results.length == 0) {
      //   const sectionDiv = document.querySelector("section");

      //   const imgDiv = document.createElement("div");
      //   imgDiv.className = "error-image";
      const h2El = document.createElement("h2");
      h2El.innerText = "No matches to your search result";
      document.body.append(h2El);
      //   const imgEl = document.createElement("img");
      //   imgEl.src = "./assets/error.png";
      //   imgEl.className = "img-class";
      //   sectionDiv.append(imgDiv);
      //   imgDiv.append(h2El);
      //   imgDiv.append(imgEl);
    }
    return data;
  }
}
export async function genreFetch(){
  const url = `https://api.themoviedb.org/3/genre/movie/list?language=en`;
  const response = await fetch(url,options);
  const data = await response.json();
  //console.log(data);
  return data;
}
