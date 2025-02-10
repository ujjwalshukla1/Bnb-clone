import mongoose from "mongoose";

const DBConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`DB Connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

export default DBConnect;
