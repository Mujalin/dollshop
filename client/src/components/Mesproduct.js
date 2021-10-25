import React from 'react'
import '../css/MesPro.css'

export default function Mesproduct() {

  const [pro_id, setProId] = useState(["P"]);

  const loadList = async () => {
    try {
      const jsonData = await resp.json();

      setProdList(jsonData);

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

        </div>
        
        <div class="b1">
          <span><a href="insert_product.php"></a></span>
        </div>
        <table class='table table-bordered table-striped'> 
          <tr>
            <th class="text-center">รูป</th>
            <th class="text-center">รหัสสินค้า</th>
            <th class="text-center">ชื่อสินค้า</th>
            <th class="text-center">ต้นทุน</th>
            <th class="text-center">ราคา</th>
            <th class="text-center">จำนวนคงเหลือ</th>
            <th class="text-center">ขนาด</th>
            <th class="text-center">แก้ไข</th>
          </tr>
          </table>
      </div>
    )
}
