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
            window.location = `/Mesproduct`;
        } catch (err){
            console.error(err.message);
        }
    }


    return (
    <div class="in1">
        <form onSubmit={doInsertForm}>
            <br/>
        <m1>เพิ่มข้อมูลสินค้า</m1>
        <br/>
        <table class='table'>
            <tr>
                <td><m2>รหัสสินค้า : </m2></td>
                <td className= "td2">
                    <input type="text" name="pro_id"
                     required onChange={e=>{setpro_id(e.target.value);}} >
                </input></td>
            </tr>
            <tr>
                <td><m2>ชื่อสินค้า :</m2></td>
                <td class="d">
                    <input type="text" name="pro_name"  onChange={e=>{setpro_name(e.target.value);}} required></input></td>
            </tr>
            <tr>
                <td><m2>ต้นทุน : </m2></td>
                <td class="d"><input type="text" name="pro_cost"  onChange={e=>{setpro_cost(e.target.value);}} required></input></td>
            </tr>
            <tr>
                <td ><m2>ราคา : </m2></td>
                <td class="d"><input type="text" name="pro_price"  onChange={e=>{setpro_price(e.target.value);}} required></input></td>
            </tr>
            <tr>
                <td><m2>จำนวนคงเหลือ : </m2></td>
                <td class="d"><input type="text" name="pro_num"  onChange={e=>{setpro_num(e.target.value);}} required></input></td>
            </tr>
            <tr>
                <td ><m2>ขนาด : </m2></td>
                <td class="d"><input type="text" name="pro_size"  onChange={e=>{setpro_size(e.target.value);}} required></input></td>
            </tr>
            <tr>
            <td><m2>รูป : </m2></td>
            <td class="d"><input type="text" name="fileupload"onChange={e=>{setfileupload(e.target.value);}} required></input></td>
            </tr>
            </table>
            <button class="b-in" type="submit" onClick={(e) => {doInsertForm(e)}} ><m4>บันทึก</m4> </button>
            <button type="reset" class="b-in2"><m4>ล้าง</m4></button>
            </form>
        </div>
    )
}
