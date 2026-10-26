import express from "express"
import { getBookingController, getUsersController } from "./admin.controller.js"
import { validateUser } from "../modules/Auth/auth.middleware.js"
import { getMovieController } from "../modules/movies/movies.controller.js"


export const adminRouter= express.Router()
adminRouter.get("/users",validateUser(true),getUsersController)
adminRouter.get("/booking",getBookingController)
adminRouter.get("/movies",getMovieController)