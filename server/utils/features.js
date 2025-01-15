import mongoose from "mongoose";

const connnectDB = (uri) => {
  mongoose
    .connect(uri, { dbName: "ChatApp" })
    .then((data) => {
      console.log(`Conneceted to DB: ${data.connection.host}`);
    })
    .catch((err) => {
      throw err;
    });
};

export { connnectDB };
