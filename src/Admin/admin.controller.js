import { getBookingService, getUsersService } from "./admin.service.js";


export const getUsersController =async(req,res) =>{
    const users= await getUsersService();            
    return res.json({
        status:"OK",
        message:"Users fetched successully",
        users:users
    })

}

export const getBookingController =async(req,res) =>{
    const bookings= await getBookingService();            
    return res.json({
        status:"OK",
        message:"booking fetched successully",
        booking:bookings
    }) 

}

export const getMoviesController =async(req,res) =>{
    const users= await getMovieService();            
    return res.json({
        status:"OK",
        message:"Movies fetched successully",
        movies:movies
    }) 

}