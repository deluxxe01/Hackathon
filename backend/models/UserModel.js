 import pool from "../db/db.js"

class UserModel {

     static async createUser(obj){

        const client = await pool.connect()
         
        const sql = "INSERT INTO Usuarios (nome,email,senha,data_nascimento,genero) VALUES($1,$2,$3,$4,$5) RETURNING nome,email,senha,data_nascimento,genero,nivel_atual,xp_total,xp_mensal "

        const consulta = await client.query(sql,[obj.nome,obj.email,obj.senha,obj.data_nascimento,obj.genero])

        console.log("log: ",consulta)

        return consulta.rows[0]

    }
}

export default UserModel