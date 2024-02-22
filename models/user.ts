import { DataTypes } from "sequelize";
import { sequelizeConnect } from "../configs/connect";

// Database connection
const db = sequelizeConnect();

const Users = db.define(
  "Users", // Table name in the database
  {
    id: {
      type: DataTypes.INTEGER, // Integer data type
      primaryKey: true, // Primary key of the table
      autoIncrement: true, // Auto-increment the id
    },
    first_name: {
      type: DataTypes.STRING, // String data type
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING, // String data type
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING, // String data type
      allowNull: false,
    },
    timezone: {
      type: DataTypes.STRING, // String data type
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING, // String data type
      allowNull: false,
    },
    event_date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
);

// User model definition
export default Users;
