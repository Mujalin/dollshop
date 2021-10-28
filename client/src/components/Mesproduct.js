import React,{useState,useEffect} from 'react'
import '../css/Mes.css'
import EditPro from './EditPro'

export default function Mesproduct() {
  const [pro_id,setId] = useState([]);
  const [pro_name,setName] = useState("ตุ๊กตา");
  const [pro_list, setList] = useState([]);

  const loadList = async () => {
    try {
      const resp = await fetch(
        `http://localhost:4000/getProduct/${pro_name}`
      );
      const jsonData = await resp.json();

      setList(jsonData);

      console.log("Resp", resp);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    console.log("Enter useEffect()");
    loadList();
  }, [pro_id]);
    return (

          <div class="insert">
              <div class="row">
              <div class="neons col-12">
            
                <h1><em>จัดการข้อมูลสินค้า</em></h1>
                </div>
                <br/>
                </div>
                    <div class="b1">
                    <span><a href= "/Inproduct" ></a></span>
                    </div>
                    <table class="table">
                      
                            <thead>
                              <tr>
                              <th><m3>รูป</m3></th>
                              <th><m3>รหัสสินค้า</m3></th>
                              <th><m3>ชื่อสินค้า</m3></th>
                              <th><m3>ต้นทุน</m3></th>
                              <th><m3>ราคา</m3></th>
                              <th><m3>จำนวนคงเหลือ</m3></th>
                              <th><m3>ขนาด</m3></th>
                              <th><m3>แก้ไข</m3></th>
                              </tr>
                            </thead>
                            <tbody>
                                {pro_list.map((product) => {
                                    return (
                                      <tr>
                                        <td className="image"><img className="image" src={product.pro_img}/></td>
                                        <td><m3>{product.pro_id}</m3></td>
                                        <td><m3>{product.pro_name}</m3></td>
                                        <td><m3>{product.pro_cost}</m3></td>
                                        <td><m3>{product.pro_price}</m3></td>
                                        <td><m3>{product.pro_num}</m3></td>
                                        <td><m3>{product.pro_size}</m3></td>
                                        
                                        <td><m3>
                                          <EditPro
                                             pro_id={product.pro_id}                    
                                            pro_name={product.pro_name}
                                            pro_cost={product.pro_cost}
                                            pro_price={product.pro_price}
                                            pro_num={product.pro_num}
                                            pro_size={product.pro_size}
                                            pro_img={product.pro_img}
                                          /></m3>
                                        </td>
                                      </tr>
                                  );
                                })}
                              </tbody>
                      </table>
                      
       </div>

    )
  }
