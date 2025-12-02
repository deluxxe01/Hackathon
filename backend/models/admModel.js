 import pool from "../db/db.js"

class admModel {
      static async createAdm(obj){
  
          const client = await pool.connect()
          
          const sql = "INSERT INTO Administradores (nome,email,senha) VALUES($1,$2,$3) RETURNING id,nome,email "
  
          const consulta = await client.query(sql,[obj.nome,obj.email,obj.hashedPassword])
  
          console.log("log: ",consulta)
  
          return consulta.rows[0]
  
      }
  
      static async getAdmByEmail(email){
  
          const client = await pool.connect()
  
          const sql = "SELECT * FROM Administradores WHERE email=$1"
  
          const consulta = await client.query(sql,[email])
  
          return consulta.rows[0]
  
      }
      
      static async deleteAdmByEmail(email){
  
          const client = await pool.connect()
  
          const sql = "DELETE FROM Administradores WHERE email=$1 RETURNING id,nome,email"
  
          const consulta = await client.query(sql,[email])
  
          return consulta.rows[0]
  
      }
  }

export default admModel;