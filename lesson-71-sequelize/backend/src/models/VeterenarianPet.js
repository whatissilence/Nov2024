import { Model, DataTypes } from 'sequelize';

export class VeterinarianPet extends Model {
  static initModel(sequelize) {
    VeterinarianPet.init({
      vet_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: { model: 'veterinarians', key: 'id' },
        onDelete: 'CASCADE'
      },
      pet_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: { model: 'pets', key: 'id' },
        onDelete: 'CASCADE'
      }
    }, {
      sequelize,
      modelName: 'VeterinarianPet',
      tableName: 'veterinarian_pet',
      timestamps: false
    });
  }
}
