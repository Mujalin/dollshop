import React,{ useState, useEffect } from 'react'
// import { useLocation } from "react-router";


export default function cart() {
   
    const [productList, setproductList] = useState([])
    // let location = useLocation();
    // let pro_id = location.pathname.split("/")[2];
    const [pro_id,setpro_id]=useState([])
    let [sale_id,setsale_id]=useState([])
    let saleid;
    let total=0;
    let pro_num;
    let amount;
    const deleteCart =(e)=>{
        e.preventDefault();
    try {
        
      const bodyData = {pro_id,saleid,pro_num,amount};
      const resp = fetch("http://localhost:4000/deleteCart", {
        method: "delete",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData),
      });
      
      window.location = "/cart";
    } catch (err) {
      console.error(err.message);
    }
    }

    const loadList = async () => {
        try {

            const resp = await fetch(`http://localhost:4000/getcart`)
            const jsondata = await resp.json()
            console.log(jsondata)
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
        
            <div className="dd">
                <form onSubmit={deleteCart}>
 <table class="table">
     <thead>
        <tr>
            <th class="text-center"> </th>
            <th class="text-center"><m3>รหัสสินค้า</m3></th>
            <th class="text-center"><m3>ชื่อสินค้า</m3></th>
            <th class="text-center"><m3>ขนาด</m3></th>
            <th class="text-center"><m3>จำนวน</m3></th>
            <th class="text-center"><m3>ราคา</m3></th>
            <th class="text-center"> </th>
        </tr>
    </thead>
    <tbody>
    
            {productList.map((products) => {
                total += products.pro_price*products.sale_amount
                saleid=products.sale_id
                pro_num=products.pro_num
                amount=products.sale_amount
                return (
                    
                     
                    
                    <tr>
                        <td class="img-procart"><m3><img className="img-procart" src={products.pro_img}/></m3></td>
                        <td class="text-cart"><br/><br/><m3>{products.pro_id}</m3></td>
                        <td class="text-cart"><br/><br/><m3>{products.pro_name}</m3></td>
                        <td class="text-cart"><br/><br/><m3>{products.pro_size}</m3></td>
                        <td class="text-cart"><br/><br/><m3>{products.sale_amount}</m3></td>
                        <td class="text-cart"><br/><br/><m3>{products.pro_price}</m3></td>
                        <td class="text-cart"><br/><br/><m3><button id="cart" className="name noselect" type="submit"  onClick={(x=>{ setpro_id(products.pro_id)})}>Delete</button></m3></td>
                    </tr>
                )
                
            })}
            <tr>
            <td colspan='4'></td>
            <td class="text-center"><m3>ราคารวม</m3></td>
            <td class="text-center"><m3>{total}</m3></td>
            <td class="text-center"><a href="/location"><button class="btn btn-success" type="submit" >ดำเนินการสั่งซื้อ</button></a></td>
           </tr>
</tbody>
</table></form><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
</div>

       
    )
}