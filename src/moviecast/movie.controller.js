import { createMovieCastService } from "./movie.service.js";
export const createMovieCastController= async(req,res)=>{
    const result = await createMovieCastService(req.body)
    res.status(201).json({
        message:"movie cast created",
        data:result
    });
};