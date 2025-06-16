import express from 'express'

export const rootRouter = express.Router();

const rootHandler = (req, res) => {

  console.log('User logged in: ', req.user);

  res.send('Hello from root page!');
}

rootRouter.get('/', rootHandler);