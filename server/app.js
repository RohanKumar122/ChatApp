import express from "express";
import userRoute from "./routes/user.js";
import { connnectDB } from "./utils/features.js";
import dotenv from "dotenv";
import { errorMiddleware } from "./middlewares/error.js";
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;
connnectDB(MONGO_URI);

const app = express();

app.use(express.json());


app.use("/user", userRoute);

app.post("/", (req, res) => {
    res.send("Hello World");
  });

app.use(errorMiddleware)  

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
