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

  app.get("/getcart", async(req, res) => {
    try {
      // let {id} = req.params;
  
      const sql = "SELECT * from cart,product where product.pro_id=cart.pro_id and cus_id='cus1' ";
      
      pool.query(sql, (err, results) => {
  
        console.log(results);
        res.send(results);
      });
    } catch (err) {
      console.error(err.message);
    }
  });

//post  
app.post("/insertCart", async(req, res) => {
  try {
    
    const {pro_id,amount}=req.body

    const sql = `INSERT INTO cart (cus_id,pro_id,amount) values('cus1','${pro_id}',${amount});INSERT INTO sale_detail (sale_id,cus_id,pro_id,sale_amount) values('sale01','cus1','${pro_id}',${amount}); `;
    
    pool.query(sql, (err, results) => {
      console.log(sql)
      console.log(results);
      res.send(results);
      
    });
    
  } catch (err) {
    console.error(err.message);
  }
});



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
app.post("/deleteCart", async(req, res) => {
  try {
    
    const {pro_id}=req.body

    const sql = `delete from cart where cus_id='cus1';delete from sale_detail where cus_id='cus1'`;
    
    pool.query(sql, (err, results) => {
      console.log(sql)
      console.log(results);
      res.send(results);
      
    });
    
  } catch (err) {
    console.error(err.message);
  }
});





