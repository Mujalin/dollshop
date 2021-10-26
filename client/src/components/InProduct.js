import React, {useState} from 'react'
import '../css/Inproduct.css'


export default function Inproduct() {
    const [pro_id,setpro_id] = useState();
    const [pro_name,setpro_name] =useState();
    const [pro_cost,setpro_cost] =useState();
    const [pro_price,setpro_price] =useState();
    const [pro_num,setpro_num] =useState();
    const [pro_size,setpro_size] =useState();
    const [fileupload,setfileupload] =useState();

    const doInsertForm = (e)=>{
        e.preventDefault();
        try{
            console.log(pro_id,pro_name,pro_cost,pro_price,pro_num,pro_size,fileupload);
            const bodyStr = {pro_id,pro_name,pro_cost,pro_price,pro_num,pro_size,fileupload};
            const resp = fetch("http://localhost:4000/inproduct",{
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(bodyStr)
            })
        } catch (err){
            console.error(err.message);
        }
    }


    return (
    <div class="in1">
        <form onSubmit={doInsertForm}>
        <h1 class="text-center">เพิ่มข้อมูลสินค้า</h1>
        <table class='table  table-striped'>
            <tr>
                <td class="td1 ">รหัสสินค้า : </td>
                <td class="td2"><input type="text" name="pro_id" size="30" onChange={e=>{setpro_id(e.target.value);}} required></input></td>
            </tr>
            <tr>
                <td class="td1">ชื่อสินค้า : </td>
                <td class="td2"><input type="text" name="pro_name" size="30" onChange={e=>{setpro_name(e.target.value);}} required></input></td>
            </tr>
            <tr>
                <td class="td1">ต้นทุน : </td>
                <td class="td2"><input type="text" name="pro_cost" size="30" onChange={e=>{setpro_cost(e.target.value);}} required></input></td>
            </tr>
            <tr>
                <td class="td1">ราคา : </td>
                <td class="td2"><input type="text" name="pro_price" size="30" onChange={e=>{setpro_price(e.target.value);}} required></input></td>
            </tr>
            <tr>
                <td class="td1">จำนวนคงเหลือ : </td>
                <td class="td2"><input type="text" name="pro_num" size="30" onChange={e=>{setpro_num(e.target.value);}} required></input></td>
            </tr>
            <tr>
                <td class="td1">ขนาด : </td>
                <td class="td2"><input type="text" name="pro_size" size="30" onChange={e=>{setpro_size(e.target.value);}} required></input></td>
            </tr>

            <td class="td1">รูป : </td>
            <td class="td2"><input type="text" name="fileupload" size="30" onChange={e=>{setfileupload(e.target.value);}} required></input></td>
            </table>
            <button class="b-in" type="submit">บันทึก</button>
            <button type="reset" class="b-in2">ล้าง</button>
            </form>
        </div>
    )
}
