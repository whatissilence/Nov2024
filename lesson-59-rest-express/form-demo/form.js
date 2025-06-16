export const formHtml = `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <title>Contact us</title>
</head>
<body>
<h1>Contact us</h1>

<form action="/users" method="POST">
  <label>
    Name:
    <input type="text" name="name" required />
  </label><br><br>

  <label>
    Email:
    <input type="email" name="email" required />
  </label><br><br>

  <label>
    Phone:
    <input type="tel" name="phone" />
  </label><br><br>

  <button type="submit">Send</button>
</form>
</body>
</html>
`;