import express from "express";
import index from "./query"


const app = express();

app.use(express.json())  // convierte los datos recibidos a json

app.use(index)



app.use((req, res, next)=>{

    res.status(404).json({
        message:'endpoint not found'
    })
})

// veriifar

export default app;
