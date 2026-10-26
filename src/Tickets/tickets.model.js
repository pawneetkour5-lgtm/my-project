import mongoose, { Types } from "mongoose";



const ticketSchema = new mongoose.Schema({
    movie_id: {
        type:Types.ObjectId,
        required: true
    },
    no_of_tickets: {
        type: Number,
        required: true
    },
    show_date: {
        type: String,
        required: true,
    },
    show_time: {
        type: String,
        required: true
    },
    user:{
        type:Types.ObjectId,
        required:true,
        ref: "Users"
    }
    
})

export const Tickets = mongoose.model("tickets",ticketSchema)