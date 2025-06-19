import Joi from 'joi'

const userRegistrationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(3).max(10).required(),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required().messages({
    'any.only': 'Confirm password field must be equal password',
  }),
  address: Joi.object({
    countryCode: Joi.number().required(),
    street: Joi.string().required(),
  }).required(),
  birthday: Joi.date().less('now').greater(new Date('2000-01-01')).required(),
  referred: Joi.boolean().required(),
  referralDetails: Joi.when('referred', {
    is: true,
    then: Joi.string().min(3).max(20).required(),
    otherwise: Joi.forbidden() //Joi.optional - можна передавати, можна ні
  }),
  hobbies: Joi.array().items(Joi.string()).min(2),
  gender: Joi.string().valid('male', 'female'),
  age: [Joi.string(), Joi.number().max(100)],
})


export const validateUser = (req, res, next) => {
  const { error } = userRegistrationSchema.validate(req.body, { abortEarly: false });

  console.log(error);

  if(error) {
    const message = error.details.map(d => d.message).join(', ');
    return res.status(400).send(message);
  }

  next();
}

// Приклад валідного JSONу щоб можна було погратися:

// {
//   "email": "my-super-cool@email.com",
//   "password": "123456789",
//   "confirmPassword": "123456789",
//   "address": {
//   "countryCode": 61001,
//     "street": "Shevchenko"
//   },
//   "birthday": "2025-05-12",
//   "referred": true,
//   "referralDetails": "qwerty",
//   "gender": "male",
//   "hobbies": ["skating", "swimming"]
// }