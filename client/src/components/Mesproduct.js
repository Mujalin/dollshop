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
                              <th>รูป</th>
                              <th>รหัสสินค้า </th>
                              <th>ชื่อสินค้า</th>
                              <th>ต้นทุน</th>
                              <th>ราคา</th>
                              <th>จำนวนคงเหลือ</th>
                              <th>ขนาด</th>
                              
                              <th>แก้ไข</th>
                              </tr>
                            </thead>
                            <tbody>
                                {pro_list.map((product) => {
                                    return (
                                      <tr>
                                        <td className="image"><img className="image" src={product.pro_img}/></td>
                                        <td>{product.pro_id}</td>
                                        <td>{product.pro_name}</td>
                                        <td>{product.pro_cost}</td>
                                        <td>{product.pro_price}</td>
                                        <td>{product.pro_num}</td>
                                        <td>{product.pro_size}</td>
                                        
                                        <td>
                                          <EditPro
                                            pro_id={product.pro_id}                    
                                            pro_name={product.pro_name}
                                            pro_cost={product.pro_cost}
                                            pro_price={product.pro_price}
                                            pro_num={product.pro_num}
                                            pro_size={product.pro_size}
                                            pro_img={product.pro_img}
                                          />
                                        </td>
                                      </tr>
                                  );
                                })}
                              </tbody>
                      </table>
                      
       </div>

    )
  }
