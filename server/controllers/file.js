import fileModel from "../models/fileSchema.js";  // Importing the file model

// Controller to create a new file entry in the database
export const createFile = async (req, res, next) => {
    // Construct the file object to be saved in the database
    const fileObj = {
        fileName: req.file.originalname,
        userID: req.params.userID,
        path: req.file.path,
    }

    const newFile = new fileModel(fileObj);  // Create a new file model instance
    try {
        const savedFile = await newFile.save();  // Save the new file to the database

        res.status(200).send("File saved successfully");  // Send success response
    } catch (err) {
        next(err);  // Pass any errors to the error handling middleware
    }
}

// Controller to delete a file from the database
export const deleteFile = async (req, res, next) => {
    try {
        await fileModel.findByIdAndDelete(req.params.id);  // Delete the file by ID
        res.status(200).json("File successfully deleted");  // Send success response
    } catch (err) {
        next(err);  // Pass any errors to the error handling middleware
    }
}

// Controller to get files associated with a specific user
export const getUserFiles = async (req, res, next) => {
    try {
        const files = await fileModel.find({ userID: req.params.userID });  // Find files by user ID
        res.status(200).json(files);  // Send the list of files as JSON response
    } catch (err) {
        next(err);  // Pass any errors to the error handling middleware
    }
}

// Controller to handle file download
export const downloadFile = async (req, res, next) => {
    try {
        const file = await fileModel.findById(req.params.fileId);  // Find the file by ID
        res.download(file.path, file.fileName);  // Download the file using its path and original name
    } catch (err) {
        next(err);  // Pass any errors to the error handling middleware
    }
}