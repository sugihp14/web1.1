import Sequelize from "sequelize";

const db = new Sequelize("ckb_db", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

export default db;
