import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router";

    export default function Produce() {
        const [pro_name, setpro_name] = useState(["ตุ๊กตา"])
    const [productList, setproductList] = useState([])
    let location = useLocation();
    let pro_id = location.pathname.split("/")[2];
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
        atomic
        {productList.map((products) => {
                
                
                return (

                    
        <div className="">
            <img className="" src={products.pro_img} />
            <div className="text">
                <h2> นิ้ว</h2>
            </div>
            <div className="bath">
                <p>฿ </p>
            </div>
            <div className="pronum">
                <p>จำนวน <input type="number" name="num" required defaultValue="1" min="1" max="" /> จำนวนชิ้นทั้งหมด  ชิ้น</p>
            </div>
            <div className="but">
                <button className="glow-hover" type="submit" name="add">เพิ่มลงตะกร้าสินค้า</button>
            </div>
        
        </div>
        )
         })}
    </div>
    )
   

    }