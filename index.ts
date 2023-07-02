import "dotenv/config"
import  express from "express"
import process from "process"
import './types/env'
import registerRoutes from "./routes"
import mongoose from "mongoose"


console.log(process.env.EXPRESS_PORT);
console.log(process.env.EXPRESS_HOST);
const app=express();

app.use(express.json());
registerRoutes(app);


const startApp=async()=>{
    console.log("before connnection")
    await mongoose.connect(process.env.MONGODB_CONNECTION)
    .then(()=>{
        console.log("mongodb connected")
    })
    
    console.log("after connnection")
    app.listen(parseInt(process.env.EXPRESS_PORT) , process.env.EXPRESS_HOST, ()=>{
        console.log("server started :"+process.env.EXPRESS_HOST + " :" + process.env.EXPRESS_PORT)
    })
    

}
startApp()




