import React, {useState} from 'react'
import '../css/Inproduct.css'


export default function Inproduct() {

    return (
    <div class="in1">
        <h1 class="text-center">เพิ่มข้อมูลสินค้า</h1>
        <table class='table  table-striped'>
            <tr>
                <td class="td1 ">รหัสสินค้า : </td>
                <td class="td2"><input type="text" name="pro_id" size="30" required></input></td>
            </tr>
            <tr>
                <td class="td1">ชื่อสินค้า : </td>
                <td class="td2"><input type="text" name="pro_name" size="30" required></input></td>
            </tr>
            <tr>
                <td class="td1">ต้นทุน : </td>
                <td class="td2"><input type="text" name="pro_cost" size="30" required></input></td>
            </tr>
            <tr>
                <td class="td1">ราคา : </td>
                <td class="td2"><input type="text" name="pro_price" size="30" required></input></td>
            </tr>
            <tr>
                <td class="td1">จำนวนคงเหลือ : </td>
                <td class="td2"><input type="text" name="pro_num" size="30" required></input></td>
            </tr>
            <tr>
                <td class="td1">ขนาด : </td>
                <td class="td2"><input type="text" name="pro_size" size="30" required></input></td>
            </tr>

            <td class="td1">รูป : </td>
            <td class="td2"><input type="file" name="fileupload" accept="image/*" required></input></td>
            </table>
            <button class="b-in" type="submit">บันทึก</button>
            <button type="reset" class="b-in2">ล้าง</button>
            
        </div>
    )
}
