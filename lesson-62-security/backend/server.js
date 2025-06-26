import express from 'express';
import session from 'express-session';
import passport from 'passport';
import passportLocal from 'passport-local';
import helmet from 'helmet'
const LocalStrategy = passportLocal.Strategy;

const app = express();

// Налаштування сесії
app.use(session({
  secret: 'tajemnica', // секретний ключ
  resave: false,
  saveUninitialized: false,
}));

app.use(express.urlencoded({ extended: true })); // Обробляємо форму і кладемо в body

app.use(helmet());

app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "https://trustedscripts.example.com"],
    objectSrc: ["'none'"],
    upgradeInsecureRequests: null, // Тут null тому що важливо сама присутність директиви, а не значення.
  }
}));


app.use(passport.initialize());
app.use(passport.session());

const userData = [
  {
    id: 1,
    username: 'johnWick',
    password: 'secret',
  },
  {
    id: 2,
    username: 'janeDoe',
    password: 'password123',
  }
]



// Налаштування стратегії Passport
passport.use(new LocalStrategy(
  function(username, password, done) {
    const user = userData.find(u => u.username === username);
    if (!user) {
      return done(null, false);
    }

    if (user.password !== password) {
      return done(null, false);
    }

    return done(null, user);
  }
));

// Серіалізація та десеріалізація користувача
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  const user = userData.find(u => u.id === id);
  // Знайти користувача за ID
  // Припустимо, що ми знайшли користувача
  done(null, user);
});

const renderPage = (title, content) => `
<!DOCTYPE html>
<html><head><title>${title}</title></head><body>
<h1>${title}</h1>
${content}
</body></html>`;

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  // res.redirect('/login');
  res.status(401).send(renderPage('Access Denied', `
    <p>You must be <a href="/login">logged in</a> to view this page.</p>
  `));
};


// Форма логіну
app.get('/login', (req, res) => {
  res.send(renderPage('Login', `
    <form method="post" action="/login">
      <input name="username" required placeholder="Username" />
      <input name="password" type="text" required placeholder="Password" />
      <button>Login</button>
    </form>
  `));
});

// Маршрут логіну
app.post('/login',
  passport.authenticate('local', { failureRedirect: '/' }),
  function(req, res) {
    console.log('Користувач увійшов:', req.user);
    // Успішний логін
    res.redirect('/');
  }
);

app.get('/', (req, res) => {
  console.log('Користувач головної сторінки:', req.user);
  res.send(renderPage('Home', `
    <p>Welcome to the home page, ${req.user?.username || 'Stranger'}</p>
    <p><a href="/login">Login</a></p>
    <p><a href="/protected">Protected Page</a></p>
  `));
});

app.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});

app.get('/protected', isAuthenticated, (req, res) => {
  res.send(renderPage('Protected', `
    <p>Hello, ${req.user.username}! This is your private page.</p>
    <a href="/logout">Logout</a>
  `));
});


app.listen(3000, () => {
  console.log('Сервер запущено на порті 3000');
});