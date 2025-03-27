"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const API_KEY = '2aaf3dea';
const inputMovieName = document.getElementById('input-movie-name');
const buttonSearchMovie = document.getElementById('button-search-movie');
const movieData = document.getElementById('movie-data');
buttonSearchMovie.addEventListener('click', searchMovie);
var ResponseResult;
(function (ResponseResult) {
    ResponseResult["True"] = "True";
    ResponseResult["False"] = "False";
})(ResponseResult || (ResponseResult = {}));
function searchMovie() {
    return __awaiter(this, void 0, void 0, function* () {
        const movieName = inputMovieName.value.trim();
        if (!movieName) {
            return;
        }
        try {
            const movies = yield getMovieList(movieName);
            inputMovieName.value = '';
            if (movies && movies.length > 0) {
                movieData.innerHTML = movies.map(getHtmlForMovie).join('');
            }
            else {
                movieData.innerHTML = `<div class="error">No movies found</div>`;
            }
        }
        catch (catchedError) {
            const error = catchedError;
            movieData.innerHTML = `<div class="error">${error.message}</div>`;
        }
    });
}
function getMovieList(movieText) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${movieText}`;
        const response = yield fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const respData = yield response.json();
        if (respData.Response === ResponseResult.False) {
            throw new Error(respData.Error);
        }
        return respData.Search || [];
    });
}
;
function getMovieById(movieID) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!movieID) {
            return;
        }
        const moreDetailsUrl = `https://www.omdbapi.com/?apikey=${API_KEY}&i=${movieID}`;
        const response = yield fetch(moreDetailsUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const respData = yield response.json();
        if (respData.Response === "False") {
            throw new Error(respData.Error);
        }
        return respData || {};
    });
}
;
function getHtmlForMovie(movie) {
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
function showMore(event) {
    return __awaiter(this, void 0, void 0, function* () {
        const target = event.target;
        if (target.className !== 'showMoreButton') {
            return;
        }
        const movieID = target.dataset.imdbId;
        if (!movieID) {
            return;
        }
        try {
            const movieDetails = yield getMovieById(movieID);
            if (!movieDetails) {
                return;
            }
            if (Object.keys(movieDetails).length > 0) {
                movieData.innerHTML = getHtmlForMovieDetails(movieDetails);
            }
            else {
                movieData.innerHTML = `<div class="error">No movies found</div>`;
            }
        }
        catch (catchedError) {
            const error = catchedError;
            movieData.innerHTML = `<div class="error">${error.message}</div>`;
        }
    });
}
function getHtmlForMovieDetails(movieDetails) {
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
