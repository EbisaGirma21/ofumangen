import { DataTypes, Model, Sequelize } from 'sequelize';

const sequelize = new Sequelize('mysql://user:pass@localhost:3306/mydb');

class {{ModelName}} extends Model {
  public name!: string;
  public email!: string;
}

{{ModelName}}.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: '{{ModelName}}' }
);

export { {{ModelName}} };
