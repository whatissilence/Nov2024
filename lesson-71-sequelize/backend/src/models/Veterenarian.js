import { Model, DataTypes } from 'sequelize';
import { VeterinarianPet } from './VeterenarianPet.js'

export class Veterinarian extends Model {
  static initModel(sequelize) {
    Veterinarian.init({
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING(100), allowNull: false },
      tel: { type: DataTypes.STRING(20) },
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
      modelName: 'Veterinarian',
      tableName: 'veterinarians'
    });
  }

  static associate(models) {
    Veterinarian.belongsToMany(models.Pet, {
      through: models.VeterinarianPet,
      foreignKey: 'vet_id',
      otherKey: 'pet_id',
      as: 'pets'
    });
  }
}
