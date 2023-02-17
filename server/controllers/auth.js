/** @format */

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/* REGISTER USER */
export const register = async (req, res) => {
  /* This makes the API call to the database to register a new user. */
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
    } =
      req.body; /* From this we are gonna send these values to the database. */

    const salt =
      await bcrypt.genSalt(); /* This line of code is generating a salt for the password. */
    const passwordHash = await bcrypt.hash(
      password,
      salt
    ); /* This line of code is hashing the password. */

    const newUser = new User({
      /* This line of code is creating a new user. The way that this thing works is that we are gonna encrypt the password, we are gonna save it and after we save it
    when the user tries to login , thay are gonna provide the password and we arve gonna salt that again and then we are gonna make sure thats the correct one. Then we are gonna give them the JSONwebtoken */
      firstName,
      lastName,
      email,
      password: passwordHash,
      picturePath,
      friends,
      location,
      occupation,
      viewedProfile: Math.floor(Math.random() * 10000),
      impressions: Math.floor(Math.random() * 10000),
    });
    const savedUser = await newUser.save();
    res
      .status(201)
      .json(
        savedUser
      ); /* With this line we are gonna let the front end know that the user has been created. And give the 201 code */
  } catch (err) {
    res
      .status(500)
      .json({
        error: err.message,
      }); /* If there is an error we are gonna send the error message. */
  }
};

/* LOGGING IN */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: "User does not exist. " });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
