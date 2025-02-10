import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
  {
    propertyLoc: {
      type: String,
      required: true,
    },
    distance: {
      type: String,
      required: true,
    },
    availability: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      rewuired: true,
    },
    image1: {
      type: String,
      required: true,
    },
    image2: {
      type: String,
      required: true,
    },
    image3: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Property = mongoose.model("Property", propertySchema);
export default Property;
