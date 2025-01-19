import { TryCatch } from "../middlewares/error.js";
import { User } from "../models/user.js";
import { cookieOptions, sendToken } from "../utils/features.js";
import { compare } from "bcrypt";
import { Errorhandler } from "../utils/utility.js";

const newUser = async (req, res) => {
  const { name, username, password, bio } = req.body;
  const avatar = {
    public_id: "dnqd1",
    url: "dwsdwd1",
  };

  console.log(req.body, name, username, password);

  const user = await User.create({
    name,
    bio,
    username,
    password,
    avatar,
  });
  console.log(req.body);

  sendToken(res, user, 201, "User created successfully");
};

const login =TryCatch( async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username }).select("+password");

  if (!user) return next(new Errorhandler("Invalid Username",404));

  const isPasswordMatched = await compare(password, user.password);

  if (!isPasswordMatched) return next(new Errorhandler("Invalid Password",404));

  sendToken(res, user, 200, `Welcome Back ${user.name}`)
})


const getMyProfile =TryCatch( async (req, res) => {
   
  const user =await User.findById(req.user);

    res.status(200).json({
        success: true,
        user
    })
})  


const logout =TryCatch( async (req, res) => {
   
    return res.status(200).cookie("chat-token","",{...cookieOptions, maxAge:0}).json({
        success: true,
        message : "Logged out successfully"
    })
})  


const searchUser =TryCatch( async (req, res) => {
   
  const {name} =req.query;
  return res.status(200).json({
      success: true,
      message :name
  })
})  


export { login, newUser,getMyProfile,logout,searchUser };
