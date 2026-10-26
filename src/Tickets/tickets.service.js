import mongoose from "mongoose";
import { Tickets } from "./tickets.model.js";
export const createticketService = async (data)=>{

    const ticketcinema= await Tickets.insertOne({
       
        movie_id:new mongoose.Types.ObjectId(data.movie_id),
        no_of_tickets:data.no_of_tickets,
        show_date:data.show_date,
        show_time:data.show_time,
        user:data.user
    })
    return ticketcinema
}
