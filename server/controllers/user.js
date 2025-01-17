import { TryCatch } from "../middlewares/error.js";
import { User } from "../models/user.js";
import { sendToken } from "../utils/features.js";
import { compare } from "bcrypt";

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

  if (!user) return next(new Error("Invalid Username"));

  const isPasswordMatched = await compare(password, user.password);

  if (!isPasswordMatched) return next(new Error("Invalid Password"));

  sendToken(res, user, 200, `Welcome Back ${user.name}`)
})



export { login, newUser };
