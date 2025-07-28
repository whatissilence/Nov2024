import { Model, DataTypes } from 'sequelize';
import { VeterinarianPet } from './VeterenarianPet.js'

export class Pet extends Model {
  static initModel(sequelize) {
    Pet.init({
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING(100), allowNull: false },
      type: { type: DataTypes.STRING(50) },
      gender: { type: DataTypes.ENUM('male', 'female') },
      birthday: { type: DataTypes.DATEONLY },
      vaccinated: { type: DataTypes.BOOLEAN, defaultValue: false },
      ownerId: {
        type: DataTypes.INTEGER,
        field: 'owner_id',
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        field: 'createdat'
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        field: 'updatedat'
      }
    }, {
      sequelize,
      modelName: 'Pet',
      tableName: 'pets'
    });
  }

  static associate(models) {
    Pet.belongsTo(models.Owner, { foreignKey: 'owner_id', as: 'owner', onDelete: 'SET NULL' });
    Pet.belongsToMany(models.Veterinarian, {
      through: models.VeterinarianPet,
      foreignKey: 'pet_id',
      otherKey: 'vet_id',
      as: 'veterinarians'
    });
  }
}
