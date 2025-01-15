import { User } from "../models/user.js";

const newUser = async (req, res) => {
  const {name,username,password,bio}=req.body;
  const avatar = {
    public_id: "dnqd1",
    url: "dwsdwd1",
  };
  

  console.log(req.body, name, username,password);

  await User.create({
    name,
    bio,
    username,
    password,
    avatar
  });
  console.log(req.body);
  res.status(201).json({message: "User created"});

};


const login = async (req, res) => {
  res.send("Login");
};

export {login, newUser};