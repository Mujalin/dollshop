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

  app.get("/getsale", async(req, res) => {
    try {
      // let name = req.params.name;
      // let id = req.params.pro_id;
      
      const sql = `SELECT pro_num,sale.sale_id,sum(sale_amount) sale_amount from sale,sale_detail,product where sale_detail.pro_id = product.pro_id and sale.sale_id=sale_detail.sale_id and sale_status="cart" LIMIT 1;  `;
      
      pool.query(sql, (err, results) => {
  
        console.log(results);
        res.send(results);
      });
    } catch (err) {
      console.error(err.message);
    }
  });
 
  app.get("/getpro_num", async(req, res) => {
    try {
      // let name = req.params.name;
      // let id = req.params.pro_id;
      
      const sql = `SELECT * from product ;  `;
      
      pool.query(sql, (err, results) => {
  
        console.log(results);
        res.send(results);
      });
    } catch (err) {
      console.error(err.message);
    }
  });

  app.get("/getamount", async(req, res) => {
    try {
      // let name = req.params.name;
      // let id = req.params.pro_id;
      
      const sql = `SELECT sum(sale_amount) from sale_detail where sale_id='${saleid}'  `;
      
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
      // let saleid=req.params.id;
      const sql = `SELECT * FROM sale,sale_detail,product WHERE product.pro_id=sale_detail.pro_id and sale.sale_id = sale_detail.sale_id and sale_status='cart'  ; `;
      
      pool.query(sql, (err, results) => {
  
        console.log(results);
        res.send(results);
      });
    } catch (err) {
      console.error(err.message);
    }
  });

  app.post("/getlogin", async(req, res) => {
    try {
      const cus_user=req.body.cus_user
      const cus_pass=req.body.cus_pass
      const sql = `SELECT * FROM customer WHERE cus_user='${cus_user}' and cus_pass='${cus_pass}' `;
      
      pool.query(sql,
  (err,result)=>{
    
      if(err){
          console.log(err); 
          res.send({err:err});
      }
      if(result.length>0){
        
          res.send(result);
          
      }else{
          res.send({message:"Wrong email/password.."});
      }
      
  });
    } catch (err) {
      console.error(err.message);
    }
  });

  app.get("/getcargo", async(req, res) => {
    try {
      
      
      const sql = `SELECT * FROM cargo `;
      
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
    
    const {pro_id,amount,saleid}=req.body
    
    const sql = `update product set pro_num=pro_num-${amount} where pro_id='${pro_id}';  INSERT INTO sale_detail (sale_id,pro_id,sale_amount) values(${saleid},'${pro_id}',${amount}); INSERT INTO sale (sale_id,sale_status) values(${saleid},'cart'); `;
    
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
    
    const {cargo_re_name,loc_desc1,loc_desc2,loc_desc3,loc_desc4,loc_desc5,cargo_re_phone, saleid,sale_amount}=req.body
    const loc_desc=loc_desc1+' '+loc_desc2+' '+loc_desc3+' '+loc_desc4+' '+loc_desc5
    let cargo_id=Math.floor(Math.random() * 100000);
    const sql = ` UPDATE sale SET sale_status='complete' WHERE sale_id=${saleid} ;insert into cargo (cargo_id, sale_id, cargo_num,  loc_desc,cargo_re_name, cargo_re_phone, cargo_status) values ('${cargo_id}',${saleid},${sale_amount},'${loc_desc}','${cargo_re_name}','${cargo_re_phone}','?????????????????????????????????');`;
    
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
    
    const {pro_id,saleid,pro_num,amount}=req.body
    let pro=pro_num+amount
    const sql = `update product set pro_num=${pro} where pro_id='${pro_id}'; delete from sale_detail where sale_id=${saleid} and pro_id='${pro_id}'`;
    
    pool.query(sql, (err, results) => {
      console.log(sql)
      console.log(results);
      res.send(results);
      
    });
    
  } catch (err) {
    console.error(err.message);
  }
});






