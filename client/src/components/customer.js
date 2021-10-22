import React,{useState,useEffect} from 'react'


export default function Customer() {

    const [customer,setcustomer]=useState([])
    const loadList=async()=>{
        try {
            const resp=await fetch(`http://localhost:5000/getCustomer`)
            const jsondata=await resp.json()
            setcustomer(jsondata)
            console.log(customer)
            

        } catch (error) {
            console.error(error.message)
        }
    }
    useEffect(()=>{
        loadList();

    },[])

    return (
        <div>
            {customer.map((customers)=>{
                return(
                <>
                <h1>{customers.cus_id}</h1>
                <h1>{customers.cus_name}</h1>
                </>
                )
            })}
        </div>
    )
}
