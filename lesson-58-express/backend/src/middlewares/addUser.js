import { users } from '../data/users.js'

// to test: http://localhost:3000/?userId=6
export const addUserMiddleware = (req, res, next) => {
  const { userId } = req.query;
  console.log('User id in query:', userId);

  if(userId) {
    const currentUser = users.find(u  => String(u.id) === userId);
    if(currentUser) {
      req.user = currentUser;
    }
  }

  next();
}