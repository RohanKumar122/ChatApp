import { User } from "../models/user.js";
import { sendToken } from "../utils/features.js";

const newUser = async (req, res) => {
  const {name,username,password,bio}=req.body;
  const avatar = {
    public_id: "dnqd1",
    url: "dwsdwd1",
  };
  

  console.log(req.body, name, username,password);

  const user = await User.create({
    name,
    bio,
    username,
    password,
    avatar
  });
  console.log(req.body);
  
  sendToken(res, user, 201, "User created successfully");

};


const login = async (req, res) => {
  res.send("Login");
};

export {login, newUser};