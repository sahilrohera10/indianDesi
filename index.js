const express = require("express");
const cors = require("cors");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");

const PORT = 8000;
dotenv.config();
mongoose
  .connect(process.env.MONGODB_URL, {})
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("./ImgUploads"));
const Routes = require("./Routes/apiRoutes");
app.use("/", Routes);

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
