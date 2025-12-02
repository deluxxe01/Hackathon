import pool from "../db/db.js"
class MedidasModel{


     static async CreateInfos(obj){

        const client = await pool.connect()

        const sql = "INSERT INTO Medidas (id_usuario,peso,altura,largura_abdomen) VALUES($1,$2,$3,$4) RETURNING id_medida,id_usuario,peso,altura,largura_abdomen"

        const consulta = await client.query(sql,[obj.id_usuario,obj.peso,obj.altura,obj.largura_abdomen])

        return consulta.rows[0]


     }
}
export default MedidasModel