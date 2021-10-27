import React,{useState} from 'react'

export default function EditProduct(props) {
    const [pro_id,setId] = useState(props.pro_id)
    const [pro_name,setName] = useState(props.pro_name)
    const [pro_cost,setCost] = useState(props.pro_cost)
    const [pro_price,setPrice] = useState(props.pro_price)
    const [pro_num,setNum] = useState(props.pro_num)
    const [pro_size,setSize] = useState(props.pro_size)
    const [pro_img,setimg] = useState(props.pro_img)
    ////const [pro_list,setlist] = useState([])

  const onUpdateData = (e) => {
    e.preventDefault();
    try {
        const bodyData = {pro_id,pro_name,pro_cost,pro_price,pro_num,pro_size,pro_img }
          const res =  fetch(`http://localhost:4000/updateProduct/${pro_id}`,{
            method: "PUT",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(bodyData)
          }

        )
            window.location="/Mespro"
        }catch(err){
            console.error(err.message)
        }
        }
return (
    <div>
      <div>
        {/* Button to Open the Modal
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target={`#pro_id${pro_id}`} //"#myModal"
        >
          Edit
        </button> */}
        <div className = "edit">
       <h1 class="text-center" >แก้ไขข้อมูลสินค้า</h1>
        <table class='table  table-striped'>
                        
                        
                        <tr >
                            <td class="td1 " >รหัสสินค้า : </td>
                            <td class="td2">
                                <input type="text"  
                                className="form-control"
                                id="id" value = {pro_id}
                                onChange={e=>{setId(e.target.value)}}></input></td>
                        </tr>
                        <tr >
                            <td class="td1" >ชื่อสินค้า : </td>
                            <td class="td2">
                            <input type="text" 
                            className="form-control"
                            id="item" value = {pro_name}
                            onChange={e=>{setName(e.target.value)}}></input></td>
                        </tr>
                        <tr>
                            <td class="td1" >ต้นทุน : </td>
                            <td class="td2">
                            <input type="text" 
                            className="form-control"
                             id="item" value ={pro_cost}
                            onChange={e=>{setCost(e.target.value)}}></input></td>
                        </tr>
                        <tr>
                            <td class="td1" >ราคา : </td>
                            <td class="td2">
                                <input type="text" 
                                className="form-control"
                                id="item" value = {pro_price}
                            onChange={e=>{setPrice(e.target.value)}}></input></td>
                        </tr>
                        <tr>
                            <td class="td1" >จำนวนคงเหลือ : </td>
                            <td class="td2">
                                <input type="text" 
                                className="form-control"
                                id="item" value = {pro_num}
                            onChange={e=>{setNum(e.target.value)}}></input></td>
                        </tr>
                        <tr>
                            <td class="td1" >ขนาด : </td>
                            <td class="td2">
                                <input type="text" 
                                className="form-control"
                                id="item"value = {pro_size}
                            onChange={e=>{setSize(e.target.value)}}></input></td></tr>
                        <tr>
                             <td class="td2"><input type="text" 
                                className="form-control"
                                id="item"value = {pro_img}
                            onChange={e=>{setimg(e.target.value)}}></input></td>
                        </tr>
                        </table>
                       
                            <button class="b-in" type="submit" >บันทึก</button> 
                            <button class="b-in2" type="submit" >ยกเลิก</button>  

        </div>
        </div>
    </div>
    )
}
