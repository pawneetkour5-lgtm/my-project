import mongoose from "mongoose";
export const createMovieCastService = async (data)=>{

    const movieCast = await mongoose.connection.db.collection("moviecast").insertOne({
        cast_name:data.cast_name,
        movie_id:data.movie_id,
        actor_id: data.actor_id
    })
    return movieCast
}