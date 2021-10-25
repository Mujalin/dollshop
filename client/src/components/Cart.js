import React,{ useState, useEffect } from 'react'
import { useLocation } from "react-router";


export default function cart() {
   
    const [productList, setproductList] = useState([])
    let location = useLocation();
    let pro_id = location.pathname.split("/")[2];

    const deleteCart =(e)=>{
        e.preventDefault();
    try {
        
      const bodyData = { pro_id};
      const resp = fetch("http://localhost:4000/deleteCart", {
        method: "post",
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

                    <form onSubmit={deleteCart}>
                    <div class="at">
                        <div className="card">
                            
                                <img className="card-img-top" src={products.pro_img} />
                            
                            <div className="card-body">
                                <h5 className="card-title">{products.pro_name}</h5>
                                <p>จำนวน {products.amount}</p>
                                <p className="card-text"> ราคา {products.pro_price} ขนาด {products.pro_size}</p>
                            </div>
                        </div>
                        <button className="glow-hover" type="submit" >Delete</button>
                    </div>
                    </form>
                )
            })}
            
        </div>
       
    )
}
