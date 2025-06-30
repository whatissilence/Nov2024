import { db } from '../db.js'
import { ObjectId } from 'mongodb'
import BadRequestError from '../errors/BadRequestError.js'
import NotFoundError from '../errors/NotFoundError.js'

export async function getMovies() {
  const moviesCollection = db.collection('movies');
  const movies = await moviesCollection.find().limit(10).toArray();
  return movies;
}

export async function getMovieById(movieId) {
  if (!ObjectId.isValid(movieId)) {
    throw new BadRequestError('Invalid movie ID format');
  }

  const moviesCollection = db.collection('movies');
  const movies = await moviesCollection.find({ _id: new ObjectId(movieId) }).toArray();

  if(!movies.length) {
    throw new NotFoundError('Movie not found');
  }

  return movies[0];
}