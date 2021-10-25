import React,{useState,useEffect} from 'react'
import '../css/MesPro.css'
import EditProduct from './EditProduct'

export default function Mesproduct() {
  const [pro_id,setId] = useState([])
  const [pro_name,setName] = useState("ตุ๊กตา")
  const [pro_list,setlist] = useState([])

   const loadList = async()=>{
      try{

          const resp = await fetch(`http://localhost:4000/getProduct/${pro_name}`);
          const jsonData = await resp.json() 
          setlist(jsonData)
          
          console.log("Resp",resp)

      }catch(err){
          console.error(err.message)
      }
  }
  useEffect(()=>{
      console.log("Enter useEffect()")
      loadList()
  },[pro_id])

    return (
        <div class="insert">
        <div class="row">
          <div class="neons col-12">
            <h1><em>จัดการข้อมูลสินค้า</em></h1>
          </div>
        </div>
        <div class="b1">
          <span><a href="insert_product.php"></a></span>
        </div>
        <table class='table table-bordered table-striped'> 
          <tr>
          <th class="text-center">รหัสสินค้า</th>
          <th class="text-center">ชื่อสินค้า</th>
            <th class="text-center">ต้นทุน</th>
            <th class="text-center">ราคา</th>
            <th class="text-center">จำนวนคงเหลือ</th>
            <th class="text-center">ขนาด</th>
            <th class="text-center">รูป</th>  
            <th class="text-center">แก้ไข</th>          
          </tr>
          <tbody>
            {pro_list.map((product) => {
                return(
                  <tr> 
                  <td>{product.pro_id}</td>
                  <td>{product.pro_name}</td>
                  <td>{product.pro_cost}</td>
                  <td>{product.pro_price}</td>
                  <td>{product.pro_num}</td>
                  <td>{product.pro_size}</td>
                  <td>{product.pro_img}</td>
                  <td><EditProduct 
                    pro_id = {product.pro_id}
                    pro_name = {product.pro_name}
                    pro_cost = {product.pro_cost}
                    pro_price = {product.pro_num}
                    pro_size = {product.pro_size}
                    pro_img = {product.pro_img}
                    />
                   <button type="button" class="btn btn-default btn-sm">แก้ไขข้อมูล</button></td>
            </tr>)
  })}

            </tbody>
          </table>
      </div>
    )
  }
