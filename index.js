import express from "express";
import cors from "cors";
import bodyparser from "body-parser";
import dotenv from "dotenv";
import RtUser from "../backend/src/router/user_r.js";
dotenv.config();
const app = express();
const allowedOrigins = ["http://localhost:3001"];

const options = {
  origin: allowedOrigins,
};
app.use(cors(options));

app.use(bodyparser.json({ limit: "100mb", extended: true }));
app.use(bodyparser.urlencoded({ limit: "100mb", extended: true }));
app.use(RtUser);
app.get("/", (err, res) => {
  res.send("Wellcome");
});

app.listen("3000", () => {
  console.log("server running");
});
