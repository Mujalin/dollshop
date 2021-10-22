import React,{useState,useEffect} from 'react'


export default function Product() {
    const [pro_id,setpro_id]=useState([])
    const [product,setproduct]=useState([])
    const loadList=async()=>{
        try {

            const resp=await fetch(`http://localhost:5000/getProduct/${pro_id}`)
            const jsondata=await resp.json()
            setproduct(jsondata)
            console.log(product)
            

        } catch (error) {
            console.error(error.message)
        }
    }
    useEffect(()=>{
        loadList();

    },[pro_id])

    return (
        <div>
            
            {/* <input type="name" class="form-control" placeholder="Enter name" id="name" 
                    onChange={e=>{
                        setpro_id(e.target.value)
                    }}
                    /> */}
            {product.map((products)=>{
                return(

                <h1>{products.pro_id}</h1>
               
                )
            })}
            {product.map((products)=>{
                return(

                <h1>{products.pro_name}</h1>
                
                )
            })}
        </div>
    )
}