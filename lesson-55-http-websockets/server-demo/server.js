import http from 'node:http';
import fs from 'node:fs';

import { join } from 'node:path';
import { html } from './main-page.js'
import { usersData } from './usersData.js'

const PORT = 3000;
const __dirname = import.meta.dirname;

const server = http.createServer((request, response) => {

  response.statusCode = 200;

  console.log('================request======================');
  console.log('request.url: ', request.url);
  console.log('request.headers: ', request.headers);
  console.log('request.method: ', request.method);
  console.log('======================================')

  if (request.url === '/') {
    response.setHeader('Content-Type', 'text/html; charset=UTF-8');
    response.write(html);
    response.end();
    return;
  }

  if (request.url === '/text') {
    response.setHeader('Content-Type', 'text/text; charset=UTF-8');
    response.write('This is the text. I swear!');
    response.end();
    return;
  }

  if(request.url === '/style.css') {
    response.setHeader('Content-Type', 'text/css');
    response.write(`
    body {
      background-color: lightblue;
    }    
    `);
    response.end();
    return;
  }


  if (request.url === '/users') {
    response.setHeader('Content-Type', 'application/json; charset=UTF-8');
    response.write(JSON.stringify(usersData));
    response.end();
    return;
  }

  if (request.url.startsWith('/imgs/')) {
    const imagePath = join(__dirname, `.${request.url}`);

    fs.readFile(imagePath, (err, data) => {
      if (err) {
        response.status = 500;
        response.end('Error reading image');
        return;
      }

      response.setHeader('Content-Type', 'image/jpeg');
      response.end(data);
    });
    return;
  }


  response.statusCode = 404;
  response.write('Not Found! Where did you get this link?');
  response.end();
});





server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});