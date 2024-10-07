import express from "express";
import { apiRouter } from "./api/Router";
import { databaseConnect } from "./db/datamodels";

const PORT = 5000
databaseConnect()

const app = express()
app.use(express.json())
app.use("/api/v1",apiRouter)
app.listen(PORT,()=>{
    console.log("running on "+ PORT);
})