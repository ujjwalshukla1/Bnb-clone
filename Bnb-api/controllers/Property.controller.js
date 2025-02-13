import propertyModel from "../models/Property.model.js";

export const CreateProperty = async (req, res) => {
  try {
    const {
      propertyLoc,
      distance,
      availability,
      category,
      price,
      image1,
      image2,
      image3,
      userId,
    } = req.body;
    if (
      !propertyLoc ||
      !distance ||
      !availability ||
      !category ||
      !price ||
      !image1 ||
      !image2 ||
      !image3 ||
      !userId
    ) {
      return res
        .status(303)
        .json({ success: false, message: "All fields required" });
    }
    if (price < 0) {
      return res
        .status(303)
        .json({ success: false, message: "Price must be greater than 0" });
    } else if (price === 0) {
      return res
        .status(303)
        .json({ success: false, message: "Price cannot be 0" });
    }

    const ExistingProperty = await propertyModel.findOne({
      propertyLoc: propertyLoc,
    });

    if (ExistingProperty) {
      return res.status(303).json({
        success: false,
        message: "Property already listed",
      });
    }

    const NewProperty = new propertyModel({
      propertyLoc,
      distance,
      availability,
      category,
      price,
      userId,
      image1,
      image2,
      image3,
    });

    await NewProperty.save();
    return res
      .status(200)
      .json({ success: true, message: "Property created successfully" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

export const GetProperty = async (req, res) => {
  try {
    const properties = await propertyModel.find();
    if (!properties || properties.length === 0) {
      return res
        .status(303)
        .json({ success: false, message: "No properties founded" });
    }
    return res.status(200).json({ success: true, properties });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

export const UpdateProperty = async (req, res) => {
  try {
    const PropertyId = req.params.id;
    const {
      propertyLoc,
      distance,
      availability,
      category,
      price,
      image1,
      image2,
      image3,
      userId,
    } = req.body;
    if (
      !propertyLoc ||
      !distance ||
      !availability ||
      !category ||
      !price ||
      !image1 ||
      !image2 ||
      !image3 ||
      !userId
    ) {
      return res
        .status(303)
        .json({ success: false, message: "All fields required" });
    }
    if (price < 0) {
      return res
        .status(303)
        .json({ success: false, message: "Price must be greater than 0" });
    } else if (price === 0) {
      return res
        .status(303)
        .json({ success: false, message: "Price can not be 0" });
    }

    const property = await propertyModel.findById({ _id: PropertyId });
    if (!property) {
      return res
        .status(303)
        .json({ success: false, message: "Product not found" });
    }

    const UpdateProperty = await propertyModel.findByIdAndUpdate(
      { _id: PropertyId },
      {
        propertyLoc,
        distance,
        availability,
        category,
        price,
        image1,
        image2,
        image3,
      },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "Property updates successfully",
      property: UpdateProperty,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: true, message: "internal server error" });
  }
};

export const DeleteProperty = async (req, res) => {
  try {
    const product = await propertyModel.findById(req.params.id);
    if (!product) {
      return res
        .status(303)
        .json({ success: false, message: "Product not found" });
    }
    const deleteProduct = await propertyModel.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      product: deleteProduct,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};
