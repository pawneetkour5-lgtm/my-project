import express from"express";
import { createActorController, deleteActorController, getActorController, updateActorController} from "./actor.controller.js";
export const actorRouter= express.Router();
actorRouter.post("/",createActorController)
actorRouter.get("/",getActorController)
actorRouter.delete("/",deleteActorController)
actorRouter.put("/",updateActorController)