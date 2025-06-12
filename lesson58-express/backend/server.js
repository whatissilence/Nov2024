import express from 'express';
import { usersRouter } from './src/routes/users.js'
import { articlesRouter } from './src/routes/articles.js'
import { rootRouter } from './src/routes/root.js'
import { logger } from './src/middlewares/logger.js'
import { addUserMiddleware } from './src/middlewares/addUser.js'

const PORT = 3000;
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

// app.use(logger);
app.use(addUserMiddleware);

app.use(rootRouter);
app.use(usersRouter);
app.use(articlesRouter);

app.listen(PORT, () => {
  console.log(`Server is started. Listening on ${PORT}`);
})