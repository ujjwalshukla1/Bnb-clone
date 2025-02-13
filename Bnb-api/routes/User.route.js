import express from "express";
import { UserBooking } from "../controllers/User.controller.js";

const UserRoute = express.Router();

UserRoute.post("/book", UserBooking);

export default UserRoute;