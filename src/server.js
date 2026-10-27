import express, { Router } from "express"
import { connectDb } from "./utils/db_connect.js";
import { movieRouter } from "./modules/movies/movies.route.js";
import { actorRouter } from "./actors/actor.route.js";
import { movieCastRouter } from "./moviecast/movie.route.js";
import ticketRouter from "./Tickets/tickets.route.js";
import authRouter from "../src/modules/Auth/auth.route.js";
import cors from "cors"
import { adminRouter } from "./administator/admin.route.js";
import { configDotenv } from "dotenv";

configDotenv()
 const app=express();
 app.use(express.json())
 app.use(cors())
 app.use("/movies",movieRouter)
 app.use("/actors",actorRouter)
 app.use ("/tickets",ticketRouter)
 app.use("/moviecast",movieCastRouter)
 app.use("/auth",authRouter)
 app.use("/admin",adminRouter)
 connectDb()
 app.listen(3000,()=>{
    console.log("server is up and running");
 })
 