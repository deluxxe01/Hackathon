import pool from "../db/db.js"
class MedidasModel{


     static async CreateInfos(obj){

        const client = await pool.connect()
        
        console.log(obj)

        const sql = "INSERT INTO Medidas (id_usuario,peso,altura,largura_abdomen) VALUES($1,$2,$3,$4) RETURNING id_medida,id_usuario,peso,altura,largura_abdomen"

        const consulta = await client.query(sql,[obj.id_usuario,obj.peso,obj.altura,obj.largura_abdomen])

        return consulta.rows[0]

     }
     static async updateMedidas(obj){

      const client = await pool.connect()

      const sql = "UPDATE Medidas SET peso=$1, altura = $2 ,largura_abdomen = $3 WHERE id_usuario = $4 RETURNING id_medida,id_usuario,peso,altura,largura_abdomen;"

      const consulta = await client.query(sql,[obj.peso,obj.altura,obj.largura_abdomen,obj.id_usuario])

      return consulta.rows[0]



     }

     static async getInfos(id){

      const client = await pool.connect()

      const sql = "SELECT peso,altura,largura_abdomen  FROM Medidas WHERE  id_usuario = $1 "

      const consulta = await client.query(sql,[id])
      
      return consulta.rows[0]

     }
}
export default MedidasModel