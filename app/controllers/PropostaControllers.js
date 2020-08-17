const Sequelize = require('sequelize')
const config = require('../config/database')
const PropostaController = {
  index: async (req,res) =>{
    const db = new Sequelize(config)
    // let login = req.body.login;
    // let senha = req.body.senha;
    let banco = 'itau';

    const result = await db.query(
      'select * from propostas where banco_origi = :banco order by data_envio DESC limit 5',
    {
      replacements:{
        banco
        // login,
        // senha
      },
      type:Sequelize.QueryTypes.SELECT
    })
    
    res.send(result)
  },
  filter: async (req,res)=>{
    const db = new Sequelize(config)
    let dados = {proposta:12345,cpf:"",status:'pegali'}
    
    const result = await db.query(
    `SELECT * FROM propostas 
    where `)

    res.send(result)
  }
}

module.exports = PropostaController;