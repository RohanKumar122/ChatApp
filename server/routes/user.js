import express from "express";
import { singleAvatar } from "../middlewares/multer.js";

import {login, newUser,getMyProfile} from "../controllers/user.js";
import { isAuthhenticated } from "../middlewares/auth.js";

const app =express.Router();

app.post("/new",singleAvatar, newUser);
app.post("/login", login);

app.get("/me",isAuthhenticated ,getMyProfile)

export default app