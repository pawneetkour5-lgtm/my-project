
import { Movies } from "../modules/movies/movies.models.js";
import { Tickets } from "../Tickets/tickets.model.js";
import { Users } from "../users/users.model.js";

export const getUsersService = async ()=>{
    const result = await Users.find().select("-password")
    return result
}
export const getBookingService = async ()=>{
    const result = await Tickets.find()
    return result
}
export const getMovieService = async ()=>{
    const result = await Movies.find()
    return result
}
