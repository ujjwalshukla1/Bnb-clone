import express from "express";
import {
  CreateProperty,
  GetProperty,
  UpdateProperty,
} from "../controllers/Property.controller.js";

const PropertyRoute = express.Router();

PropertyRoute.post("/create", CreateProperty);
PropertyRoute.get("/all", GetProperty);
PropertyRoute.put("/update/:id", UpdateProperty);

export default PropertyRoute;
