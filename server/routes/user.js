import express from "express";
import { singleAvatar } from "../middlewares/multer.js";

import {login, newUser} from "../controllers/user.js";

const app =express.Router();

app.post("/new",singleAvatar, newUser);
app.post("/login", login);

export default app