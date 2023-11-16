import db from "../config/dbConfig.js";
import Sequelize from "sequelize";

const DataTypes = Sequelize;
const Users = db.define(
  "user",
  {
    nama: {
      type: DataTypes.STRING,
    },
    alamat: {
      type: DataTypes.STRING,
    },
    nomor_telepon: {
      type: DataTypes.STRING,
    },
    jenis_kelamin: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

const loginHistory = db.define(
  "login_history",
  {
    email: {
      type: DataTypes.STRING,
    },
    refresh_token: {
      type: DataTypes.TEXT,
    },
    device: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

const ResetPassword = db.define("reset_password", {
  email: {
    type: DataTypes.STRING,
  },
  refresh_token: {
    type: DataTypes.TEXT,
  },
  status: {
    type: DataTypes.STRING,
  },
});

(async () => {
  await db.sync();
})();

export default { Users };
