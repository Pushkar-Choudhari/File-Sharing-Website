import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
    fileName: {
        type: String,
        required: true
    },
    userID: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    path: {
        type: String,
        required: true
    }
})

export default mongoose.model("files", fileSchema)