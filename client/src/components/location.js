import React, { useState,useEffect } from 'react'

export default function location() {
    
    const [cargo_re_name,setcargo_re_name]=useState([])
    const [loc_desc1,setloc_desc1]=useState([])
    const [loc_desc2,setloc_desc2]=useState([])
    const [loc_desc3,setloc_desc3]=useState([])
    const [loc_desc4,setloc_desc4]=useState([])
    const [loc_desc5,setloc_desc5]=useState([])
    const [cargo_re_phone,setcargo_re_phone]=useState([])
    let [sale_id,setsale_id]=useState([])
    let [amount,setamount]=useState([])
    let saleid;
    let sale_amount;
    const insertloc =(e)=>{
        e.preventDefault();
    try {
        
      const bodyData = { cargo_re_name,loc_desc1,loc_desc2,loc_desc3,loc_desc4,loc_desc5,cargo_re_phone,saleid,sale_amount};
      const resp = fetch("http://localhost:4000/insertloc", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData),
      });
      
      window.location = `/payment`;
    } catch (err) {
      console.error(err.message);
    }
    }
    const loadsale_id = async () => {
      try {

          const resp = await fetch(`http://localhost:4000/getsale`)
          const jsondata = await resp.json()
          setsale_id(jsondata)
          


      } catch (error) {
          console.error(error.message)
      }
  }
  const loadamount = async () => {
    try {

        const resp = await fetch(`http://localhost:4000/getamount`)
        const jsondata = await resp.json()
        setamount(jsondata)
        


    } catch (error) {
        console.error(error.message)
    }
}
  useEffect(() => {
    loadamount();
    loadsale_id();

}, [])

    return (
      
        <div>
          {sale_id.map((sale)=>{
            saleid=sale.sale_id
            sale_amount=sale.sale_amount
return 
        })}
            <form onSubmit={insertloc} >
      <div className="boot"><br/>
        <label>ชื่อผู้รับสินค้า </label>
        <input className="sec" type="text" onChange={(x=>{ setcargo_re_name(x.target.value)})}  required placeholder="ชื่อผู้รับ" />
        <br /><br />
        <label> ที่อยู่ผู้รับสินค้า </label>        
        <input className="sec" type="text" onChange={(x=>{ setloc_desc1(x.target.value)})} size={20}  required placeholder="บ้านเลขที่/หมู่" />
        <br /><br />
        <label> ตำบล/แขวง </label>
        <input className="sec" type="text" onChange={(x=>{ setloc_desc2(x.target.value)})} size={20} required placeholder="ตำบล/แขวง" />
        <br /><br />
        <label> อำเภอ/เขต </label>
        <input className="sec" type="text" onChange={(x=>{ setloc_desc3(x.target.value)})} size={20} required placeholder="อำเภอ/เขต" />
        <br /><br />
        <label> จังหวัด </label>
        <select className="sec" onChange={(x=>{ setloc_desc4(x.target.value)})}>
          <option value selected>กรุณาเลือกจังหวัด </option>
          <option value="กรุงเทพมหานคร">กรุงเทพมหานคร</option>
          <option value="กระบี่">กระบี่ </option>
          <option value="กาญจนบุรี">กาญจนบุรี </option>
          <option value="กาฬสินธุ์">กาฬสินธุ์ </option>
          <option value="กำแพงเพชร">กำแพงเพชร </option>
          <option value="ขอนแก่น">ขอนแก่น</option>
          <option value="จันทบุรี">จันทบุรี</option>
          <option value="ฉะเชิงเทรา">ฉะเชิงเทรา </option>
          <option value="ชัยนาท">ชัยนาท </option>
          <option value="ชัยภูมิ">ชัยภูมิ </option>
          <option value="ชุมพร">ชุมพร </option>
          <option value="ชลบุรี">ชลบุรี </option>
          <option value="เชียงใหม่">เชียงใหม่ </option>
          <option value="เชียงราย">เชียงราย </option>
          <option value="ตรัง">ตรัง </option>
          <option value="ตราด">ตราด </option>
          <option value="ตาก">ตาก </option>
          <option value="นครนายก">นครนายก </option>
          <option value="นครปฐม">นครปฐม </option>
          <option value="นครพนม">นครพนม </option>
          <option value="นครราชสีมา">นครราชสีมา </option>
          <option value="นครศรีธรรมราช">นครศรีธรรมราช </option>
          <option value="นครสวรรค์">นครสวรรค์ </option>
          <option value="นราธิวาส">นราธิวาส </option>
          <option value="น่าน">น่าน </option>
          <option value="นนทบุรี">นนทบุรี </option>
          <option value="บึงกาฬ">บึงกาฬ</option>
          <option value="บุรีรัมย์">บุรีรัมย์</option>
          <option value="ประจวบคีรีขันธ์">ประจวบคีรีขันธ์ </option>
          <option value="ปทุมธานี">ปทุมธานี </option>
          <option value="ปราจีนบุรี">ปราจีนบุรี </option>
          <option value="ปัตตานี">ปัตตานี </option>
          <option value="พะเยา">พะเยา </option>
          <option value="พระนครศรีอยุธยา">พระนครศรีอยุธยา </option>
          <option value="พังงา">พังงา </option>
          <option value="พิจิตร">พิจิตร </option>
          <option value="พิษณุโลก">พิษณุโลก </option>
          <option value="เพชรบุรี">เพชรบุรี </option>
          <option value="เพชรบูรณ์">เพชรบูรณ์ </option>
          <option value="แพร่">แพร่ </option>
          <option value="พัทลุง">พัทลุง </option>
          <option value="ภูเก็ต">ภูเก็ต </option>
          <option value="มหาสารคาม">มหาสารคาม </option>
          <option value="มุกดาหาร">มุกดาหาร </option>
          <option value="แม่ฮ่องสอน">แม่ฮ่องสอน </option>
          <option value="ยโสธร">ยโสธร </option>
          <option value="ยะลา">ยะลา </option>
          <option value="ร้อยเอ็ด">ร้อยเอ็ด </option>
          <option value="ระนอง">ระนอง </option>
          <option value="ระยอง">ระยอง </option>
          <option value="ราชบุรี">ราชบุรี</option>
          <option value="ลพบุรี">ลพบุรี </option>
          <option value="ลำปาง">ลำปาง </option>
          <option value="ลำพูน">ลำพูน </option>
          <option value="เลย">เลย </option>
          <option value="ศรีสะเกษ">ศรีสะเกษ</option>
          <option value="สกลนคร">สกลนคร</option>
          <option value="สงขลา">สงขลา </option>
          <option value="สมุทรสาคร">สมุทรสาคร </option>
          <option value="สมุทรปราการ">สมุทรปราการ </option>
          <option value="สมุทรสงคราม">สมุทรสงคราม </option>
          <option value="สระแก้ว">สระแก้ว </option>
          <option value="สระบุรี">สระบุรี </option>
          <option value="สิงห์บุรี">สิงห์บุรี </option>
          <option value="สุโขทัย">สุโขทัย </option>
          <option value="สุพรรณบุรี">สุพรรณบุรี </option>
          <option value="สุราษฎร์ธานี">สุราษฎร์ธานี </option>
          <option value="สุรินทร์">สุรินทร์ </option>
          <option value="สตูล">สตูล </option>
          <option value="หนองคาย">หนองคาย </option>
          <option value="หนองบัวลำภู">หนองบัวลำภู </option>
          <option value="อำนาจเจริญ">อำนาจเจริญ </option>
          <option value="อุดรธานี">อุดรธานี </option>
          <option value="อุตรดิตถ์">อุตรดิตถ์ </option>
          <option value="อุทัยธานี">อุทัยธานี </option>
          <option value="อุบลราชธานี">อุบลราชธานี</option>
          <option value="อ่างทอง">อ่างทอง </option>
          <option value="อื่นๆ">อื่นๆ</option>
        </select>
        <br /><br />
        <label> รหัสไปรษณีย์ </label>
        <input className="sec" type="text" onChange={(x=>{ setloc_desc5(x.target.value)})} size={20} required placeholder="รหัสไปรษณีย์ 5 หลัก" minLength={5} maxLength={5} />
        <br /><br />
        <label> เบอร์โทรศัพท์ </label>
        <input className="sec" type="text" onChange={(x=>{ setcargo_re_phone(x.target.value)})} size={20} required minLength={10} maxLength={10} placeholder="หมายเลขโทรศัพท์" />
        <br /><br />
        <button class="b-in3" type="submit" name="btnsummit"> <m4>บันทึก</m4> </button>
        <button class="b-in2" type="reset" name="clear"> <m4>ล้าง</m4> </button> 
      </div></form>
        </div>
    )
}