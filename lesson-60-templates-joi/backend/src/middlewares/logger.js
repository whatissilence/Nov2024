import NotFoundError from '../errors/NotFoundError.js'

export const logger = (req, res, next) => {
  console.log(req.method + ' ' + req.originalUrl);
  // const err = new NotFoundError('Error from logger');
  // next(err);
  next();
}