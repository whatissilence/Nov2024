import express from 'express';
export const usersRouter = express.Router();

const getUsersHandler = (req, res) => {
  res.send('Users list');
}

const createUserHandler = (req, res) => {
  res.send(`User created`);
}

const updateUserHandler = (req, res) => {
  res.send(`User updated`);
}

const deleteUserHandler = (req, res) => {
  const { userId } = req.params;
  res.send(`User with id ${userId} deleted`);
}

const userHandler = (req, res) => {
  const { userId } = req.params;
  res.send(`User ID: ${userId}`);
}

usersRouter.route('/users')
  .get(getUsersHandler)
  .post(createUserHandler)
  .put(updateUserHandler)
  .delete(deleteUserHandler);

usersRouter.route('/users/:userId')
  .get(logUserId, userHandler)
  .delete(logUserId, deleteUserHandler);

function logUserId(req, res, next) {
  const { userId } = req.params;
  console.log('User ID: ', userId);

  if (isNaN(Number(userId))) {
    res.status(403).send('Invalid user');
    return;
  }

  next();
}