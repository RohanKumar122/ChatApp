import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const cookieOptions ={maxAge:15*24*60*60*1000,
  sameSite:"none",
  httpOnly:true,
  secure:true
}
const connnectDB = (uri) => {
  mongoose
    .connect(uri, { dbName: "ChatApp" })
    .then((data) => {
      console.log(`Conneceted to DB: ${data.connection.host}`);
    })
    .catch((err) => {
      throw err;
    });
};

const sendToken = (res, user, code, message) => {
  const token = jwt.sign({_id:user._id},process.env.JWT_SECRET);

  console.log(token)
  
  return res.status(code).cookie("chat-token",token,cookieOptions).json({
    success: true,
    message,
  });
};

export { connnectDB,sendToken };
