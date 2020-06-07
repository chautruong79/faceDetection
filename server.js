require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const cors = require("cors");
//const path = require("path");

const register = require("./controllers/register");
const signin = require("./controllers/signin");
const profile = require("./controllers/profile");
const image = require("./controllers/image");

const saltRounds = 10;
let User = require("./models/user.model");

const app = express();
const port = process.env.PORT || 7000;
const apiKey = process.env.API;

app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
//app.use(express.static(path.join(__dirname, "client", "build")));

mongoose.connect(
  "mongodb+srv://admin-ct:test123@cluster0-jvn0n.mongodb.net/UserDB?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
mongoose.set("useCreateIndex", true);

// app.get("/", (req, res) => {
//   User.find({}, (err, users) => {
//     if (err) {
//       res.status(400).json("Error: " + err);
//     } else {
//       res.json(users);
//     }
//   });
// });

app.post("/signin", (req, res) => {
  signin.handleSignin(req, res, bcrypt, User);
});

app.post("/register", (req, res) => {
  register.handleRegister(req, res, bcrypt, User, saltRounds);
});

app.get("/profile/:userId", (req, res) => {
  profile.handleProfile(req, res, User);
});

app.patch("/image", (req, res) => {
  image.handleImage(req, res, User);
});

app.post("/imageurl", (req, res) => {
  image.handleAPICall(req, res, apiKey);
});

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
