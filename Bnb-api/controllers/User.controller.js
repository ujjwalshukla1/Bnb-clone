import User from "../models/User.model.js";

export const UserBooking = async (req, res) => {
  try {
    const { Name, PropertyName, Email, CheckIn, CheckOut, NoGuest, Price } =
      req.body;
    if (
      !Name ||
      !PropertyName ||
      !Email ||
      !CheckIn ||
      !CheckOut
    ) {
      return res
        .status(303)
        .json({ success: false, message: "All fields required" });
    }
    const ExistingBooking = await User.findOne({ Email, PropertyName });
    if (ExistingBooking) {
      return res.status(303).json({
        success: false,
        message: "Booking already exist",
      });
    }

    const NewBooking = new User({
      Name,
      Email,
      CheckIn,
      CheckOut,
      NoGuest,
      Price,
      PropertyName,
    });

    await NewBooking.save();
    if (NewBooking) {
      return res
        .status(200)
        .json({ success: true, message: "Booking Done, Enjoy" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};
