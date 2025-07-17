import mongoose from 'mongoose';

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 50
  },
  age: {
    type: Number,
    required: true,
    min: 0,
    max: 120
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    validate: {
      validator: function(v) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
      },
      message: props => `${props.value} is not a valid email!`
    }
  },
  mother: mongoose.SchemaTypes.ObjectId,
  hobbies: [String],
  address: {
    street: String,
    city: String,
    country: String
  },
  // createdAt: {
  //   type: Date,
  //   immutable: true,
  //   default: () => Date.now()
  // },
}, {
  collection: 'persons',
  timestamps: true,
});

personSchema.methods.toJSON = function () {
  const person = this;
  const personObject = person.toObject();

  // Remove sensitive information
  delete personObject._id; // Version key
  delete personObject.__v; // Version key
  delete personObject.createdAt; // Created at timestamp
  delete personObject.updatedAt; // Updated at timestamp

  return personObject;
}

personSchema.methods.sayHello = function () {
  return `Hello, my name is ${this.name}`;
}

personSchema.statics.findOneByName = function (name) {
  return this.findOne({ name: new RegExp(name, 'i') });
}

personSchema.query.byName = function (name) {
  return this.where({ name: new RegExp(name, 'i') });
}



export default mongoose.model('Person', personSchema);