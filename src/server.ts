import express, { Application } from "express";
import cors from 'cors'
import routesUser from './routes/route.user'
import { PORT } from "./config";

class Server {

    private app: Application

    //La interfaz Application representa una aplicación Express. 
    //Puedes usar esta interfaz para configurar y ejecutar tu aplicación Express, 
    //así como para acceder a todas las funcionalidades proporcionadas por Express.
    constructor() {
        this.app=express()
        this.listen()
        this.midlewares()
        this.routes()
        this.dbConnect()
    }

    listen(){  // Inicia el servidor
        this.app.listen(PORT,()=>{
            console.log('Aplication corriendo en el puerto '+ PORT)
        })
    }

    routes(){
        //this.app.use('/api/products', routesProduct)
        this.app.use('/api/users', routesUser)
    }

    midlewares(){
        //Este middleware se utiliza para analizar el cuerpo de las solicitudes entrantes con el formato JSON. 
        //Cuando tu servidor Express recibe una solicitud con el encabezado 
        this.app.use(express.json())

        this.app.use(cors())
    }
    
    async dbConnect(){
        try{     
            console.log('Connection has been established successfully.')
        }catch(error){
            console.error('Unable to conneect to the database:', error)
        }
    } 
}
export default Server;

/*
const app = express();

app.use(express.json())  // convierte los datos recibidos a json

app.use(index)

app.use((req, res, next) => {

    res.status(404).json({
        message: 'endpoint not found'
    })
})
*/
