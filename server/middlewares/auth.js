import jwt from "jsonwebtoken";

const isAuthenticated =(req, res, next) => {
    const token = req.cookies["chat-token"];
    
    if(!token) return res.status(401).json({success:false,message:"Please Login to access this route"});

    const decodeData = jwt.verify(token,process.env.JWT_SECRET);

    req.user = (decodeData._id);

    console.log(decodeData)

    next();


}

export {isAuthenticated}