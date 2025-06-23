import jwt from 'jsonwebtoken';

const secretKey = 'mysupersecret';

const payload = {
  name: 'John Wick',
  email: 'john@example.com',
  age: 42,
  pets: [
    {
      name: 'Spike',
      type: 'Dog'
    }
  ]
}

const options = {
  algorithm: 'HS512',
  expiresIn: '3s',
  audience: 'http://localhost:3000',
}

const token = jwt.sign(payload, secretKey, options);
console.log('Token: ', token);

const verifyOptions = {
  audience: 'http://localhost:3000',
}

try {
  const decodedToken = jwt.verify(token, 'mysupersecret', verifyOptions);
  console.log('Decoded Token: ', decodedToken);
} catch (e) {
  console.log('Failed to decode token: ', e.name, e.message);
}

// const justDecodedToken = jwt.decode(token);
// console.log('Just Decoded Token: ', justDecodedToken);


// const timeFunction = () => {
//   try {
//     console.log('5 SECONDS LATER');
//     const decodedToken = jwt.verify(token, 'mysupersecret');
//     console.log('Decoded Token: ', decodedToken);
//   } catch (e) {
//     console.log('Failed to decode token: ', e.name, e.message);
//   }
// }
//
// setTimeout(timeFunction, 5000);



// Sign payload and return JWT asynchronously
function jwtSignAsync(payload, options = {}) {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, SECRET_KEY, options, (err, token) => {
      if (err || !token) return reject(err);
      resolve(token);
    });
  });
}

// Verify token and return decoded payload asynchronously
function jwtVerifyAsync(token, options = {}) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, SECRET_KEY, options, (err, decoded) => {
      if (err) return reject(err);
      resolve(decoded);
    });
  });
}