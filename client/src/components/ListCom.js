import React, { useState, useEffect } from 'react'


export default function ListCom() {
    const [pro_name, setpro_name] = useState(["ตุ๊กตา"])
    const [productList, setproductList] = useState([])
    const loadList = async () => {
        try {

            const resp = await fetch(`http://localhost:4000/getProduct/${pro_name}`)
            const jsondata = await resp.json()
            setproductList(jsondata)
            console.log(productList)


        } catch (error) {
            console.error(error.message)
        }
    }
    useEffect(() => {
        loadList();

    }, [pro_name])

    // const pro=productList.map(x=>{
    //     return [x.pro_id,x.pro_name]

    // })
    // console.log(pro)

    return (
        <div>
            <input type="name" class="form-control" placeholder="Enter name" id="name"
                onChange={e => {
                    setpro_name(e.target.value)
                }}
            />
            {productList.map((products) => {
                const pro_img="./product/"+products.pro_img
                return (

                    
                        <div class="at">
                            <div className="card">
                                <a href="produce.js">
                                    <img className="card-img-top" src={pro_img} />
                                </a>
                                <div className="card-body">
                                    <h5 className="card-title">{products.pro_name}</h5>
                                    <p className="card-text"> ราคา {products.pro_price} ขนาด {products.pro_size}</p>
                                </div>
                            </div>

                        </div>
                    
                )
            })}
        </div>

    )

}