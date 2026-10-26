import express from "express";
import { createMovieCastController} from "./movie.controller.js";
export const movieCastRouter =express.Router();
movieCastRouter.post("/",createMovieCastController)
