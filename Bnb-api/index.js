import express from "express";
import dotenv from "dotenv";
import DBConnect from "./libs/db.js";
import PropertyRoute from "./routes/Property.route.js";
import cors from "cors";
import UserRoute from "./routes/User.route.js";

dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors("*"));

app.use(express.json());
app.use("/properties", PropertyRoute);
app.use("/user", UserRoute);

app.listen(PORT, () => {
  console.log(`Backend is running on ${PORT}`);
  DBConnect();
});
