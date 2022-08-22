const pool = require('./config/database')
const express = require ("express");
const app = express();
const cors = require("cors");

pool.connect((err, client, release) => {
  if (err) {
      return console.error(
          'Error acquiring client', err.stack)
  }
  client.query('SELECT NOW()', (err, result) => {
      release()
      if (err) {
          return console.error(
              'Error executing query', err.stack)
      }
      console.log("Connected to Database !")
  })
})

app.use(cors);
app.use(express.json());

app.post("/register",(req, res)=>{
    const {nome} = req.body;
    const {preco} =req.body;
    const {category} = req.body;
    console.log(category);

    let sql ="INSERT INTO games(nome, preco, category)VALUES (?,?,?)";
    pool.query(sql,[nome, preco, category],(err, result)=>{
        console.log(err);
    });
})
app.get("/getCards", (req, res)=>{
    letsql = "SELECT * FROM games";
    pool.query(sql, (err, result)=>{
        if(err)
            console.log(err);
        else 
            res.send(result);
    })
})

app.listen(3001,()=>{
    console.log("rodando o servidor");
})