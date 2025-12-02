import { Pool } from "pg";



const pool = new Pool({
    host:"localhost",
    database:"", // <- nome do database que não foi decidido
    password:"", //<- senha do senai
    user:"postgres",
    port:5432,
    max:10

})



export default pool


