import express from 'express';
import { getMovieById, getMovies } from '../services/movies.js'

export const moviesRouter = express.Router();

moviesRouter.get('/movies', async (req, res) => {
  res.json(await getMovies());
})

moviesRouter.get('/movies/:movieId', async (req, res) => {
  const { movieId } = req.params;

  try {
    return res.status(200).json(await getMovieById(movieId));
  } catch (error) {
    return res.status(error.statusCode).send(error.message);
  }
})