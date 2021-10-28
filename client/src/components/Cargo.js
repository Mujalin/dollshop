import React, { useState, useEffect } from 'react'

export default function Cargo() {
    const [cargo, setcargo] = useState([])
    const loadList = async () => {
        try {

            const resp = await fetch(`http://localhost:4000/getcargo`)
            const jsondata = await resp.json()
            setcargo(jsondata)
            console.log(cargo)


        } catch (error) {
            console.error(error.message)
        }
    }
    useEffect(() => {
        loadList();

    }, [])
    return (
        <div>
            <div class="neons col-12">
            
            <h1><em>รายการการจัดส่ง</em></h1>
            </div>
            <div class="mess">
                <table class="table">

                    <thead>
                        <tr>
                            <th class="text-center"><m3>รหัสการส่ง</m3></th>
                            <th class="text-center"><m3>รหัสสินค้า</m3></th>
                            <th class="text-center"><m3>จำนวนสินค้า</m3></th>
                            <th class="text-center"><m3>วันที่จัดส่ง</m3></th>
                            <th class="text-center"><m3>รายละเอียดที่อยู่</m3></th>
                            <th class="text-center"><m3>ชื่อผู้รับ</m3></th>
                            <th class="text-center"><m3>เบอร์โทร</m3></th>
                            <th class="text-center"><m3>สถานะการส่ง</m3></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cargo.map((cargos) => {
                            return(
                            <tr>
                                <td className="text-mes"><m3>{cargos.cargo_id}</m3></td>
                                <td class="text-mes"><m3>{cargos.sale_id}</m3></td>
                                <td class="text-mes"><m3>{cargos.cargo_num}</m3></td>
                                <td class="text-mes"><m3>{cargos.cargo_date}</m3></td>
                                <td class="text-mes"><m3>{cargos.loc_desc}</m3></td>
                                <td class="text-mes"><m3>{cargos.cargo_re_name}</m3></td>
                                <td class="text-mes"><m3>{cargos.cargo_re_phone}</m3></td>

                                <td class="text-mes"><m3>{cargos.cargo_status}</m3></td>
 
                                
                            </tr>
       )
                        })}
                    </tbody>
                </table>
                <br /><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> </div>
        </div>
    )
}
