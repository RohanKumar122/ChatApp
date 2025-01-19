import { TryCatch } from "./error.js";
import jwt from "jsonwebtoken";

const isAuthhenticated =TryCatch( async (req, res, next) => {
    const token = req.cookies["chat-token"];
    
    if(!token) return res.status(401).json({success:false,message:"Unauthorized"});

    const decodeData = jwt.verify(token,process.env.JWT_SECRET);

    req.user = (decodeData._id);

    console.log(decodeData)

    next();


})

export {isAuthhenticated}