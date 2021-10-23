import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router";




    export default function Produce() {
        
    const [productList, setproductList] = useState([])
    const [amount,setamount] = useState(1)
    let location = useLocation();
    let pro_id = location.pathname.split("/")[2];
    const doinsert =(e)=>{
        e.preventDefault();
    try {
        
      const bodyData = { pro_id,amount};
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

    }, [])
    return (
    <div>
        
        {productList.map((products) => {
               

                return (

                
        <div className="box">
            <form name="myForm" onSubmit={doinsert} >
            <img className="" src={products.pro_img} />
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
                
                <button className="glow-hover" type="submit" >เพิ่มลงตะกร้าสินค้า</button>
                
            </div>
            </form>
        </div>
        )
         })}
    </div>
    )
    }
    
     