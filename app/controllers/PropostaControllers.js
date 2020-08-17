const Sequelize = require('sequelize');
const config = require('../config/database');


//trazer 5 ultimas propostas 
const PropostaController = {
  index: async (req, res) => {
    const db = new Sequelize(config)
    const result = await db.query(
      `select * from vw_app where id_parceiro = 
      38 order by data_envio DESC limit 5 `, {
        type: Sequelize.QueryTypes.SELECT
      })
    res.send(result)
  },


  //trazer propostas filtradas 
  filter: async (req, res) => {
    const db = new Sequelize(config)
    let filtro = req.body


    
    let consulta = 'SELECT * FROM propostas where id_parceiro = 38'

    Object.keys(filtro).forEach((key) => {
    if (filtro[key] != " "){
    consulta = consulta +' and '+ key + ' = '+ filtro[key]
    }
    
  })

    

     const result = await db.query(
      consulta,
      {
        type:Sequelize.QueryTypes.SELECT
      })
    res.send(result)
  }
}

module.exports = PropostaController;