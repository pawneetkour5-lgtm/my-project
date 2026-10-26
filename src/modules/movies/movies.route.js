import express from"express";
import { createMovieController, deleteMovieController, getMovieController, updateMoviesBycontroller } from "./movies.controller.js";
export const movieRouter= express.Router();
movieRouter.post("/",createMovieController)
movieRouter.get("/",getMovieController)
movieRouter.delete("/",deleteMovieController)
movieRouter.put("/",updateMoviesBycontroller)