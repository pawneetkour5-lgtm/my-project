import mongoose, { Types } from "mongoose";



const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    publishDate: {
        type: Date,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true
    },
    
})

export const Movies = mongoose.model("movies",movieSchema)