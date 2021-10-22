const express = require('express')
const app = express();
const port =4000;
const pool=require('./connect')
const cors = require('cors');
const { json } = require('express');




app.use(cors());

app.use(express.json());


app.listen(port,()=>{
    console.log(`server has started ${port}`);
})
//routes
//get
app.get("/getProduct/:name", async(req, res) => {
    try {
      let name = req.params.name;
      let id = req.params.id;
      
      const sql = `SELECT * from product where pro_name like "%${name}%"  `;
      
      pool.query(sql, (err, results) => {
  
        console.log(results);
        res.send(results);
      });
    } catch (err) {
      console.error(err.message);
    }
  });

  app.get("/getProductById/:pro_id", async(req, res) => {
    try {
      let name = req.params.name;
      let id = req.params.pro_id;
      
      const sql = `SELECT * from product where pro_id="${id}"  `;
      
      pool.query(sql, (err, results) => {
  
        console.log(results);
        res.send(results);
      });
    } catch (err) {
      console.error(err.message);
    }
  });


  app.get("/getCustomer", async(req, res) => {
    try {
      // let {id} = req.params;
  
      const sql = "SELECT * from customer ";
      
      pool.query(sql, (err, results) => {
  
        console.log(results);
        res.send(results);
      });
    } catch (err) {
      console.error(err.message);
    }
  });

//post  
app.post('/insert',async(req,res)=>{
    try {
        const {name,price}=req.body
        let data= await pool.query(
            "insert into fruits (name,price) values ($1,$2) ",[name,price]
        )
        console.log(name,price)
        res.json("insert conpelete....")
    } catch (err) {
        console.error(err.massage)
    }
})


//put 
app.put('/update/:id',async(req,res)=>{
    try {
        let {id}=req.params
        let {name,price} =req.body
        let data=await pool.query(
            "update fruits set name=$1,price=$2 where id=$3",[name,price,id]
        )
        res.json("data has update......")
    } catch (err) {
        console.error(err.massage)
    }
})


//delete
app.delete('/delete/:id',async (req,res)=>{
    try {
        let {id}=req.params
        let data=await pool.query(
            "delete from fruits where id= $1",[id]
        )
        console.log(id)
        res.json("delete compelete....") 
    } catch (err) {
        console.error(err.massage)
    }
})





