import React,{useState,useEffect} from 'react'


export default function ListCom() {
    const [pro_id,setpro_id]=useState([])
    const [productList,setproductList]=useState([])
    const loadList=async()=>{
        try {

            const resp=await fetch(`http://localhost:5000/getProduct/`)
            const jsondata=await resp.json()
            setproductList(jsondata)
            console.log(productList)
            

        } catch (error) {
            console.error(error.message)
        }
    }
    useEffect(()=>{
        loadList();

    },[])

    return (
        <div>
            
            {/* <input type="name" class="form-control" placeholder="Enter name" id="name" 
                    onChange={e=>{
                        setpro_id(e.target.value)
                    }}
                    /> */}
            {productList.map((products)=>{
                return(

                
                <>
                <h1>{products.pro_id}</h1>
                <h1>{products.pro_name}</h1>
                </>
                )
            })}
        </div>
    )
}
