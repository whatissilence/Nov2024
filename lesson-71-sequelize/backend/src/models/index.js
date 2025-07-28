import { Sequelize } from 'sequelize';
import { Address } from './Address.js';
import { Owner } from './Owner.js';
import { Pet } from './Pet.js';
import { Veterinarian} from './Veterenarian.js';
import { VeterinarianPet} from './VeterenarianPet.js';


import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: 'postgres',
    // logging: false, // Disable logging; default: console.log
  }
);

Address.initModel(sequelize);
Owner.initModel(sequelize);
Pet.initModel(sequelize);
Veterinarian.initModel(sequelize);
VeterinarianPet.initModel(sequelize);

const models = { Address, Owner, Pet, Veterinarian, VeterinarianPet };

Object.values(models).forEach(model => {
  if (model.associate) {
    model.associate(models);
  }
});

export {
  sequelize,
  Owner,
  Address,
  Pet,
  Veterinarian,
};