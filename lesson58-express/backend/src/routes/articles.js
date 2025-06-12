import express from 'express';

export const articlesRouter = express.Router();

const getArticlesHandler = (req, res) => {
  res.render('articles', { artName: 'My super puper art!'});
}

const createArticleHandler = (req, res) => {
  res.send(`Article created`);
}

const getArticleHandler = (req, res) => {
  const { articleId } = req.params;
  res.send(`Article Id: ${articleId}`);
}

articlesRouter.get('/articles', getArticlesHandler);
articlesRouter.post('/articles', createArticleHandler);
articlesRouter.get('/articles/:articleId', getArticleHandler);