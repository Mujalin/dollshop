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
  
      const sql = `SELECT * FROM cart,product WHERE product.pro_id=cart.pro_id and sale_id='sale01' ; `;
      
      pool.query(sql, (err, results) => {
  
        console.log(results);
        res.send(results);
      });
    } catch (err) {
      console.error(err.message);
    }
  });

  app.get("/login", async(req, res) => {
    try {
      const {cus_user,cus_pass}=req.body
      
      const sql = `SELECT * FROM customer WHERE cus_user='${cus_user}' and cus_pass='${cus_pass}' `;
      
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

    const sql = `INSERT INTO cart (sale_id,pro_id,amount) values('sale01','${pro_id}',${amount}); INSERT INTO sale_detail (sale_id,pro_id,sale_amount) values('sale01','${pro_id}',${amount}); `;
    
    pool.query(sql, (err, results) => {
      console.log(sql)
      console.log(results);
      res.send(results);
      
    });
    
  } catch (err) {
    console.error(err.message);
  }
});



//post and delete
app.post("/insertloc", async(req, res) => {
  try {
    
    const {cargo_re_name,loc_desc1,loc_desc2,loc_desc3,loc_desc4,loc_desc5,cargo_re_phone}=req.body
    const loc_desc=loc_desc1+' '+loc_desc2+' '+loc_desc3+' '+loc_desc4+' '+loc_desc5
    const sql = ` insert into location values('cus10','${loc_desc}','loc10'); insert into cargo values ('cargo0','sale0','0','2020-20-20','loc10','${cargo_re_name}','${cargo_re_phone}','กำลัง');`;
    
    pool.query(sql, (err, results) => {
      console.log(sql)
      console.log(results);
      res.send(results);
      
    });
    
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/inproduct", async(req, res) => {
  try {
    
    const {pro_id,pro_name,pro_cost,pro_price,pro_num,pro_size,fileupload}=req.body

    const sql =  `INSERT INTO product VALUES('${pro_id}','${pro_name}','${pro_cost}' ,'${pro_price}','${pro_num}','${pro_size}','${fileupload}');`
    
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
app.put("/updateProduct/:id", (req, res) => {
  try {
    let { id } = req.params;
    let  {pro_id,pro_name,pro_cost,pro_price,pro_num,pro_size,pro_img} = req.body;
    const sql = 
    `UPDATE product SET pro_name="${pro_name}",pro_cost=${pro_cost}
    ,pro_price=${pro_price},pro_num=${pro_num},pro_size=${pro_size},pro_img="${pro_img}" WHERE pro_id="${pro_id}"`;
    console.log(id);
    pool.query(sql, (err, results) => {
      if (err) {
        res.send(err.message);
        throw err;
      }
      console.log(sql);
      console.log(results);
      console.log(sql);
      res.send("updated successfully");
    });
  } catch (err) {
    console.error(err.message);
  }
});


//delete
app.delete("/deleteCart", async(req, res) => {
  try {
    
    const {pro_id}=req.body

    const sql = `delete from cart where sale_id='sale01' and pro_id='${pro_id}';delete from sale_detail where sale_id='sale01' and pro_id='${pro_id}'`;
    
    pool.query(sql, (err, results) => {
      console.log(sql)
      console.log(results);
      res.send(results);
      
    });
    
  } catch (err) {
    console.error(err.message);
  }
});






