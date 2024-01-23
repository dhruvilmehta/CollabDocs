import express,{Express, Request, Response} from 'express'
import 'dotenv/config.js';
import env from './config/env.config.js';
import db from './db/models/index.js';
import router from './routes';
import cors from 'cors';
import errorHandler from './middleware/error-handler.js';

const app: Express=express()
app.use(
    cors({
        origin: "*"
    })
)
app.use(express.json())
app.use(router)

app.use(errorHandler)
const port=env.PORT

db.sequelize.sync()

// app.get("/",(req:Request, res:Response)=>{
//     console.log("Hello")
//     res.send("Express + Typescript")
// })

// app.listen(port, ()=>{
//     console.log(`Server is running at port ${port}`)
// })

export default app