import React,{useState} from 'react'

export default function EditPro(props) {
    const [pro_id,setId] = useState(props.pro_id)
    const [pro_name,setName] = useState(props.pro_name)
    const [pro_cost,setCost] = useState(props.pro_cost)
    const [pro_price,setPrice] = useState(props.pro_price)
    const [pro_num,setNum] = useState(props.pro_num)
    const [pro_size,setSize] = useState(props.pro_size)
    const [pro_img,setimg] = useState(props.pro_img)
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
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target={`#pro_id${pro_id}`}
            >
              Edit
            </button>
            {/* The Modal */}
            <div className="modal fade" id={`pro_id${pro_id}`}>
              <div className="modal-dialog">
                <div className="modal-content">
                  {/* Modal Header */}
                  <div className="modal-header">
                    <h4 className="modal-title">Edit Product</h4>
                    <button type="button" className="close" data-dismiss="modal">
                      ×
                    </button>
                  </div>
                  {/* Modal body */}
                  <div className="modal-body">
                    <tr >
                            <td class="td1 " >รหัสสินค้า : </td>
                            <td class="td2">
                                <input type="text"  
                                className="form-control"
                                id="id"
                                value = {pro_id}
                                onChange={(e)=>{
                                setId(e.target.value)}}></input>
                           </td>
                   </tr>
                   <tr >
                            <td class="td1" >ชื่อสินค้า : </td>
                            <td class="td2">
                            <input type="text" 
                            className="form-control"
                            id="item"
                            value = {pro_name}
                            onChange={(e)=>
                            {setName(e.target.value)}}></input></td>
                    </tr>
                    <tr>
                            <td class="td1" >ต้นทุน : </td>
                            <td class="td2">
                            <input type="text" 
                            className="form-control"
                             id="item" 
                             value ={pro_cost}
                            onChange={e=>{
                                setCost(e.target.value)}}></input></td>
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
                             <td class="td2"><input type="file" 
                                className="form-control"
                                id="item"
                                // value = {pro_img}
                                onChange={e=>{setimg(e.target.value)}}></input></td>
                        </tr>
                    </div>
                    <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-success"
                      data-dismiss="modal"
                      onClick={(e) => {onUpdateData(e)}} >Save </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-dismiss="modal"> Close</button>
                  </div>
                  </div>
               
                  
              </div>
            </div>
          </div>
        </div>
      );
    }
