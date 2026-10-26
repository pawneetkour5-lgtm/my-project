import mongoose from "mongoose";
import { Movies } from "./movies.models.js";
export const createMovieService = async (data) => {
    const movie = await Movies.insertOne({
        name: data.name,
        rating: data.rating,
        publishDate: data.publishDate,
        thumbnail:data.thumbnail

    })
    return movie
}

export const getMovieService = async () => {
    const result = await Movies.find()


    return result
}

export const deleteMovieService = async (id) => {
    const result = await Movies.deleteOne({
        _id: new mongoose.Types.ObjectId(id)
    })
}

export const updateMovieService = async (id,data) => {
    const result = await Movies.updateOne({
        _id: new mongoose.Types.ObjectId(id)
    },{
        $set:{
            ...data
        }
    })
}