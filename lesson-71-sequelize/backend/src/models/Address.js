import { Model, DataTypes } from 'sequelize';

export class Address extends Model {
  static initModel(sequelize) {
    Address.init({
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      street: { type: DataTypes.STRING(100), allowNull: false },
      home: { type: DataTypes.STRING(10) },
      flat: { type: DataTypes.STRING(10) },
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
      modelName: 'Address',
      tableName: 'addresses',
      timestamps: true
    });
  }

  static associate(models) {
    Address.belongsTo(
      models.Owner,
      {
        foreignKey: 'owner_id',
        as: 'owner',
        onDelete: 'CASCADE'
      }
    );
  }
}