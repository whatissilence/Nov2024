export const logger = (req, res, next) => {
  const now = new Date();
  console.log(`${req.originalUrl} ${now} ${req.method} ${req.url}`);
  next();
}