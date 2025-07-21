import mongoose from 'mongoose';

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    required: true,
    min: 10
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: function(v) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
      },
      message: props => `${props.value} is not a valid email!`
    }
  },
  mother: { type: mongoose.Schema.Types.ObjectId, ref: 'Person' },
  hobbies: [String],
  address: {
    street: String,
    city: String,
    country: String
  }
}, {
  collection: 'persons',
  timestamps: true,
  autoIndex: true
});

personSchema.methods.toJSON = function () {
  const person = this;
  const personObject = person.toObject();

  // Remove sensitive information
  delete personObject.__v; // Version key
  // delete personObject._id; // Version key
  // delete personObject.createdAt; // Created at timestamp
  // delete personObject.updatedAt; // Updated at timestamp
  delete personObject.password;

  return personObject;
}

personSchema.methods.sayMyName = function () {
  return `My name is ${this.name}`;
}

personSchema.post('find', function(doc) {
  console.log('============================')
  console.log(doc)
  console.log('============================')
});

export const Person = mongoose.model('Person', personSchema);

