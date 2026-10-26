import { createticketService } from "./tickets.service.js"

export const createTicketController = async (req,res)=> {
    const result = await createticketService(req.body);
    res.status (201).json ({ Message:"ticket inserted", Data:result});

}