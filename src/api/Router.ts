import express from "express";
import { userRouter } from "./Routes/userRoutes";

export const apiRouter = express.Router()


apiRouter.use("/userRoutes",userRouter)