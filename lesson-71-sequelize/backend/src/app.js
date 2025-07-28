import express from 'express';
import dotenv from 'dotenv';
import { Address, sequelize, Veterinarian } from './models/index.js'
import { Owner, Pet } from './models/index.js'
import { Op } from 'sequelize'

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.get('/test', async (req, res) => {
  // const newOwner = await Owner.create({
  //   id: 1,
  //   name: 'John Doe',
  //   phone: '123-456-7890',
  //   address: {
  //     street: '123 Main St',
  //     city: 'Anytown',
  //     state: 'CA',
  //     zip: '12345'
  //   }
  // }, {
  //   include: ['address']
  // });
  //
  // res.json(newOwner);

  // const owner = await Owner.update({
  //   name: 'Updated Name',
  //   phone: '987-654-3210'
  // }, {
  //   where: {
  //     id: 6
  //   },
  //   returning: true
  // });

  // const result = await Owner.destroy({
  //   where: {
  //     id: 6
  //   }
  // })
  // res.json(result);

  // const aliceAndDavid = await Veterinarian.findAll({
  //   where: {
  //     [Op.or]: [
  //       { name: 'Dr. Alice Green' },
  //       { phone: '555-7890' }
  //     ]
  //   },
  // })
  //
  // res.json(aliceAndDavid);

  // const alice = await Veterinarian.findOne({
  //   where: {
  //     name: 'Dr. Alice Green'
  //   }
  // })
  //
  // const spike = await Pet.findByPk(7);
  // spike.addVeterinarian(alice);
  //
  // res.json({
  //   alice,
  // });

  const vets = await Veterinarian.findAndCountAll({
    limit: 1,
    offset: 0,
    sort: [['id', 'ASC']],
  });
  res.json(vets);
})

app.get('/pets', async (req, res) => {
  const pets = await Pet.findAll({
    where: {
      type: req.query.type || 'dog',
    },
    include: ['veterinarians']
  });
  res.json(pets);
})

app.get('/owners', async (req, res) => {
  const owners = await Owner.findAll({
    attributes: ['name', 'phone',],
    include: ['address', 'father',{
      model: Pet,
      as: 'pets',
      attributes: ['name', 'type', 'gender'],
    }]
  });

  res.json(owners);
})

app.get('/owners/:id', async (req, res) => {
  const { id } = req.params;
  const owner = await Owner.findByPk(id, {
    raw: true
  });

  console.log('======================================');
  console.log(owner);
  console.log('======================================');

  if (!owner) {
    return res.status(404).json({ error: 'Owner not found' });
  }

  res.json(owner);
})

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('Connected to Database');

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

startServer()
