import e from "express"
import pool from "../db/db.js"

class MissionsModel{
      static async getAllMissions(){
          const client =  await pool.connect()
  
          const sql = "SELECT id_missao,titulo,descricao,xp_recompensa FROM Missoes"
  
          const consulta = await client.query(sql)
  
          return consulta.rows
      }
  
      static async getMissionById(id){
          const client =  await pool.connect()
  
          const sql = "SELECT id_missao,titulo,descricao,xp_recompensa FROM Missoes WHERE id_missao=$1"
  
          const consulta = await client.query(sql,[id])
  
          return consulta.rows[0]
      }

      static async createMission(obj){
          const client =  await pool.connect()
  
          const sql = "INSERT INTO Missoes (titulo,descricao,xp_recompensa) VALUES($1,$2,$3) RETURNING id_missao,titulo,descricao,xp_recompensa"
  
          const consulta = await client.query(sql,[obj.titulo,obj.descricao,obj.xp_recompensa])
  
          return consulta.rows[0]  
      }

      static async updateMission(id,obj){
          const client =  await pool.connect()
  
          const sql = "UPDATE Missoes SET titulo=$1, descricao=$2, xp_recompensa=$3 WHERE id_missao=$4 RETURNING id_missao,titulo,descricao,xp_recompensa"
  
          const consulta = await client.query(sql,[obj.titulo,obj.descricao,obj.xp_recompensa,id])
  
          return consulta.rows[0]  
      }
  }

export default MissionsModel