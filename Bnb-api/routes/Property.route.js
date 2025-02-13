import express from "express";
import {
  CreateProperty,
  DeleteProperty,
  GetProperty,
  UpdateProperty,
} from "../controllers/Property.controller.js";

const PropertyRoute = express.Router();

PropertyRoute.post("/create", CreateProperty);
PropertyRoute.get("/all", GetProperty);
PropertyRoute.put("/update/:id", UpdateProperty);
PropertyRoute.delete("/delete/:id", DeleteProperty);

export default PropertyRoute;
