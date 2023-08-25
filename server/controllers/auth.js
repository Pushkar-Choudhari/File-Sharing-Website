import userModel from "../models/userSchema.js";  // Importing the user model
import bcrypt from "bcryptjs";  // Importing bcrypt for password hashing
import { createError } from "../utils/error.js";  // Importing a function to create custom errors

export const register = async (req, res, next) => {
    // Check if username already exists in the database
    const usernameExists = await userModel.findOne({ username: req.body.username });
    if (usernameExists) {
        return next(createError(409, "Username already exists"));  // Return error if username already exists
    }

    // Check if email already exists in the database
    const emailExists = await userModel.findOne({ email: req.body.email });
    if (emailExists) {
        return next(createError(409, "Email already exists"));  // Return error if email already exists
    }

    try {
        const salt = bcrypt.genSaltSync(10);  // Generate a salt for password hashing
        const hash = bcrypt.hashSync(req.body.password, salt);  // Hash the provided password

        // Create a new user using the userModel schema
        const newUser = new userModel({
            username: req.body.username,
            email: req.body.email,
            password: hash,  // Store the hashed password
        });

        newUser.save();  // Save the new user to the database
        res.status(200).send("Successfully Registered");  // Send success response
    } catch (err) {
        next(err);  // Pass any errors to the error handling middleware
    }
};

export const login = async (req, res, next) => {
    console.log(req.body);  // Log the request body

    try {
        // Find a user with the provided username
        const user = await userModel.findOne({ username: req.body.username });
        if (!user) {
            return next(createError(404, "User Not Found"));  // Return error if user not found
        }

        // Compare the provided password with the stored hashed password
        const isPassCorrect = await bcrypt.compare(req.body.password, user.password);
        if (!isPassCorrect) {
            return next(createError(400, "Wrong Password or Username"));  // Return error if password is incorrect
        }

        // Exclude the password from the response and send other user details
        const { password, ...otherDetails } = user._doc;
        res.status(200).json(otherDetails);  // Send the user details as JSON response
    } catch (err) {
        next(err);  // Pass any errors to the error handling middleware
    }
};

