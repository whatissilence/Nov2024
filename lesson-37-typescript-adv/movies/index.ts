const API_KEY = '2aaf3dea';
const inputMovieName = document.getElementById('input-movie-name') as HTMLInputElement;
const buttonSearchMovie = document.getElementById('button-search-movie') as HTMLElement;
const movieData = document.getElementById('movie-data') as HTMLElement;

buttonSearchMovie.addEventListener('click', searchMovie);

enum ResponseResult {
  True = 'True',
  False = 'False'
}

type ShortMovieDescription = {
  Title: string,
  Year: string,
  imdbID: string,
  Type: string,
  Poster: string
}

type MovieDescriptionRating = {
  Source: string,
  Value: string
}

type LongMovieDescription = {
  Title: string,
  Year: string,
  Rated: string,
  Released: string,
  Runtime: string,
  Genre: string,
  Director: string,
  Writer: string,
  Actors: string,
  Plot: string,
  Language: string,
  Country: string,
  Awards: string,
  Poster: string,
  Ratings: MovieDescriptionRating[],
  Metascore: string,
  imdbRating: string,
  imdbVotes: string,
  imdbID: string,
  Type: string,
  DVD: string,
  BoxOffice: string,
  Production: string,
  Website: string,
  Response: ResponseResult,
  Error?: string
}


type ResultMovieSearch = {
  Search: ShortMovieDescription[];
  totalResults: string,
  Response: ResponseResult,
  Error: string
}



async function searchMovie(): Promise<void> {
  const movieName: string = inputMovieName.value.trim();

  if (!movieName) {
    return;
  }

  try {
    const movies: ShortMovieDescription[] = await getMovieList(movieName);
    inputMovieName.value = '';

    if (movies && movies.length > 0) {

      movieData.innerHTML = movies.map(getHtmlForMovie).join('');
    } else {
      movieData.innerHTML = `<div class="error">No movies found</div>`;
    }
  } catch (catchedError: unknown) {
    const error = catchedError as Error;
    movieData.innerHTML = `<div class="error">${error.message}</div>`;
  }
}

async function getMovieList(movieText: string): Promise<ShortMovieDescription[]> {
  const url: string = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${movieText}`;
  const response: Response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const respData: ResultMovieSearch = await response.json();

  if (respData.Response === ResponseResult.False) {
    throw new Error(respData.Error);
  }

  return respData.Search || [];
};

async function getMovieById(movieID?: string): Promise<LongMovieDescription | undefined> {
  if (!movieID) {
    return;
  }

  const moreDetailsUrl = `https://www.omdbapi.com/?apikey=${API_KEY}&i=${movieID}`;
  const response: Response  = await fetch(moreDetailsUrl);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const respData: LongMovieDescription = await response.json();

  if (respData.Response === "False") {
    throw new Error(respData.Error);
  }

  return respData || {};
};


function getHtmlForMovie(movie: ShortMovieDescription): string {
  return `
        <div class="movie-item">
        <div><img src="${movie.Poster}" alt="${movie.Title}" /></div>
        <div>${movie.Title}</div>
        <div>${movie.Year}</div>
        <div>${movie.Type}</div>
        <button 
        class="showMoreButton"
        data-imdb-id="${movie.imdbID}"
        type="button">More details</button>
        </div>
        `;
}

movieData.addEventListener('click', showMore);

async function showMore(event: MouseEvent): Promise<void> {
  const target = event.target as HTMLElement;

  if (target.className !== 'showMoreButton') {
    return;
  }

  const movieID: string | undefined = target.dataset.imdbId;

  if (!movieID) {
    return;
  }

  try {
    const movieDetails: LongMovieDescription | undefined = await getMovieById(movieID);

    if(!movieDetails) {
      return;
    }

    if (Object.keys(movieDetails).length > 0) {
      movieData.innerHTML = getHtmlForMovieDetails(movieDetails);
    } else {
      movieData.innerHTML = `<div class="error">No movies found</div>`;
    }
  } catch (catchedError: unknown) {
    const error = catchedError as Error;
    movieData.innerHTML = `<div class="error">${error.message}</div>`;
  }
}


function getHtmlForMovieDetails(movieDetails: LongMovieDescription): string {
  return `
  <div class="movieDataContainer">
  <img src="${movieDetails.Poster}" alt="${movieDetails.Title}">
  <div class="movie-description">
  <div>${movieDetails.Title}</div>
  <div>${movieDetails.Year}</div>
  <div>${movieDetails.Rated}</div>
  <div>${movieDetails.Released}</div>
  <div>${movieDetails.Runtime}</div>
  <div>${movieDetails.Genre}</div>
  <div>${movieDetails.Director}</div>
  <div>${movieDetails.Writer}</div>
  <div>${movieDetails.Actors}</div>
  <div>${movieDetails.Plot}</div>
  <div>${movieDetails.Language}</div>
  <div>${movieDetails.Country}</div>
  <div>${movieDetails.Awards}</div>
  </div>
  </div>
`;
}

