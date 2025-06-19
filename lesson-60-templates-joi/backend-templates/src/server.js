import express from 'express';
import nunjucks from 'nunjucks';

const PORT = process.env.PORT || 4000;

const app = express();

// PUG ===================================
// Налаштування PUG як движка шаблонів
// app.set('view engine', 'pug');
// app.get('/', (req, res) => {
//   const data = { title: 'Головна сторінка', message: 'Привіт, світе!', content: 'Some PUG content' };
//   res.render('index', data);
// });

// EJS ==================================
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const data = { title: 'Головна сторінка', message: 'Привіт, світе!', content: 'My EJS content' };
  res.render('page', data);
});

// NUNJUCKS ==================================
// nunjucks.configure('views', {
//   autoescape: true,
//   express: app
// });
//
//
// app.get('/', (req, res) => {
//   const data = { title: 'Головна сторінка', message: 'Привіт, світе!', content: 'My NUNJUCKS new content' };
//   res.render('demo.njk', data);
// });


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
})
