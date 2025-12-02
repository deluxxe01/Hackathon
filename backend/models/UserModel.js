 import pool from "../db/db.js"

class UserModel {

     static async createUser(obj){

        const client = await pool.connect()
         
        const sql = "INSERT INTO Usuarios (nome,email,senha,data_nascimento,genero) VALUES($1,$2,$3,$4,$5) RETURNING nome,email,senha,data_nascimento,genero,nivel_atual,xp_total,xp_mensal "

        const consulta = await client.query(sql,[obj.nome,obj.email,obj.senha,obj.data_nascimento,obj.genero])

        console.log("log: ",consulta)

        return consulta.rows[0]

    }

    static async getUserByEmail(email){

        const client = await pool.connect()

        const sql = "SELECT * FROM Usuarios WHERE email=$1"

        const consulta = await client.query(sql,[email])

        return consulta.rows[0]

    }

    static async updateProfile(email, updateFields) {
        const client = await pool.connect();

        const setClauses = [];
        const values = [];
        let index = 1;

        for (const field in updateFields) {
            setClauses.push(`${field} = $${index}`);
            values.push(updateFields[field]);
            index++;
        }

        values.push(email);

        const sql = `UPDATE Usuarios SET ${setClauses.join(', ')} WHERE email = $${index} RETURNING id, nome, email, data_nascimento, genero, nivel_atual, xp_total, xp_mensal`;

        const consulta = await client.query(sql, values);

        return consulta.rows[0];
    }

    static async deleteUserByEmail(email){

        const client = await pool.connect()

        const sql = "DELETE FROM Usuarios WHERE email=$1 RETURNING id,nome,email"

        const consulta = await client.query(sql,[email])

        return consulta.rows[0]

    }
}

export default UserModel