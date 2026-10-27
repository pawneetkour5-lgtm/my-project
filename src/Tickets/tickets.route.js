import express from "express";
import { createTicketController } from "./tickets.controller.js";
import { validateUser } from "../modules/Auth/auth.middleware.js";
const ticketRouter= express.Router()
ticketRouter.post("/",validateUser(false),createTicketController)
export default ticketRouter;