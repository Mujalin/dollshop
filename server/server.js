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
  
      const sql = "SELECT * FROM sale_detail,product WHERE product.pro_id=sale_detail.pro_id and cus_id='cus1' ; ";
      
      pool.query(sql, (err, results) => {
  
        console.log(results);
        res.send(results);
      });
    } catch (err) {
      console.error(err.message);
    }
  });
  // app.get("/getcart1", async(req, res) => {
  //   try {
  //     // let {id} = req.params;
  
  //     const sql = "SELECT sum(product.pro_price*cart.amount)total FROM cart,product WHERE product.pro_id=cart.pro_id and cus_id='cus1' ; ";
      
  //     pool.query(sql, (err, results) => {
  
  //       console.log(results);
  //       res.send(results);
  //     });
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // });

//post  
app.post("/insertCart", async(req, res) => {
  try {
    
    const {pro_id,amount}=req.body

    const sql = `INSERT INTO sale_detail (sale_id,cus_id,pro_id,sale_amount) values('sale01','cus1','${pro_id}',${amount}); `;
    
    pool.query(sql, (err, results) => {
      console.log(sql)
      console.log(results);
      res.send(results);
      
    });
    
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/insertloc", async(req, res) => {
  try {
    
    const {cargo_re_name,loc_desc1,loc_desc2,loc_desc3,loc_desc4,loc_desc5,cargo_re_phone}=req.body
    const loc_desc=loc_desc1+' '+loc_desc2+' '+loc_desc3+' '+loc_desc4+' '+loc_desc5
    const sql = `insert into location values('cus10','${loc_desc}','loc10'); insert into cargo values ('cargo0','sale0','0','2020-20-20','loc10','${cargo_re_name}','${cargo_re_phone}','กำลัง');`;
    
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

    const sql = `delete from sale_detail where cus_id='cus1' and pro_id='${pro_id}'`;
    
    pool.query(sql, (err, results) => {
      console.log(sql)
      console.log(results);
      res.send(results);
      
    });
    
  } catch (err) {
    console.error(err.message);
  }
});






