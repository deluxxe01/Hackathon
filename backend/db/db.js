import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config()



const pool = new Pool({
    host: process.env.DB_HOST,
    database:process.env.DB_NAME,
    password: process.env.DB_PASSWORD, 
    user: process.env.DB_USER, 
    port: process.env.DB_PORT,
    max: process.env.DB_MAX_CLIENTS 
})



export default pool


