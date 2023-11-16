import {
  Register,
  checkUser,
  getAll,
  deleteUser,
  updateUser,
} from "../controller/user_c.js";
import express from "express";

const Route = express.Router();
Route.get("/user", getAll);
Route.post("/user", Register);
Route.post("/user/check", checkUser);
Route.post("/user/delete", deleteUser);
Route.put("/user", updateUser);
// Route.delete("/user:id", Cuser.createUser);
export default Route;
