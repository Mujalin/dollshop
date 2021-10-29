import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router";

    export default function Produce() {
        
    const [productList, setproductList] = useState([])
    const [amount,setamount] = useState(1)
    let location = useLocation();
    let pro_id = location.pathname.split("/")[2];
    let [sale_id,setsale_id]=useState([])
    let [pro_num,setpro_num]=useState([])
        let saleid;
        
    const insertCart =(e)=>{
        e.preventDefault();
    try {
        
      const bodyData = { pro_id,amount,saleid,pro_num};
      const resp = fetch("http://localhost:4000/insertCart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData),
      });
      
      window.location = `/produce/${pro_id}`;
    } catch (err) {
      console.error(err.message);
    }
    }
    
    const loadsale_id = async () => {
        try {

            const resp = await fetch(`http://localhost:4000/getsale`)
            const jsondata = await resp.json()
            setsale_id(jsondata)
            


        } catch (error) {
            console.error(error.message)
        }
    }

    const loadpro_num = async () => {
        try {

            const resp = await fetch(`http://localhost:4000/getpro_num`)
            const jsondata = await resp.json()
            setpro_num(jsondata)
            


        } catch (error) {
            console.error(error.message)
        }
    }

    const loadList = async () => {
        try {

            const resp = await fetch(`http://localhost:4000/getProductById/${pro_id}`)
            const jsondata = await resp.json()
            setproductList(jsondata)
            console.log(productList)


        } catch (error) {
            console.error(error.message)
        }
    }
    useEffect(() => {
        loadList();
        loadsale_id();
        loadpro_num();
    }, [])
    return (
    <div className="bg-produce">
{pro_num.map((num)=>{
    let pro=num.pro_num
    
})}
        {sale_id.map((sale)=>{
            saleid=sale.sale_id
            pro_num=sale.pro_num
            if(saleid==undefined){
                saleid=Math.floor(Math.random() * 100000);
              }
             
        }
        )
        }

        {productList.map((products) => {
               
            
                return (

                <form name="myForm" onSubmit={insertCart} >
        
            <div className="box">
            <img className="pro-img" src={products.pro_img} />
            <div className="text">
                <h2>{products.pro_name} {products.pro_size} นิ้ว</h2>
            </div>
            <div className="bath">
                <p>฿ {products.pro_price} </p>
            </div>
            <div className="pronum">
                <p>จำนวน <input type="number" name="num" onChange={(x=>{ setamount(x.target.value)})} required defaultValue="1" min="1" max={products.pro_num} /> จำนวนชิ้นทั้งหมด {products.pro_num} ชิ้น</p>
            
            </div>
            <div className="but">
                
                <button class="btn btn-success" type="submit" >เพิ่มลงตะกร้าสินค้า</button>
                
            </div>
            
        </div></form>
        )
         })}
    </div>
    )
    }