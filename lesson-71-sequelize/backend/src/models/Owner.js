import { Model, DataTypes } from 'sequelize';

export class Owner extends Model {
  static initModel(sequelize) {
    Owner.init({
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      phone: {
        type: DataTypes.STRING(20)
      },
      fatherId: {
        type: DataTypes.INTEGER,
        field: 'father_id',
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
      modelName: 'Owner',
      tableName: 'owners',
      timestamps: true
    });
  }

  static associate(models) {
    Owner.hasOne(
      models.Address,
      {
        foreignKey: 'owner_id',
        as: 'address'
      }
    );
    Owner.hasMany(models.Pet, { foreignKey: 'owner_id', as: 'pets' });
    Owner.belongsTo(models.Owner, { foreignKey: 'father_id', as: 'father' });
  }
}