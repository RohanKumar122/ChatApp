import express from "express";
import { searchUser } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const app =express.Router();


app.use(isAuthenticated)

app.get("/search" ,searchUser)

export default app