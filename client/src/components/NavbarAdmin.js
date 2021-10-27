import React from 'react'

export default function NavbarAdmin() {
    return (
        <div>
            <section style={{backgroundColor: 'gray-800'}}>
    <div className="header1">
      <div className="icon">
        <img src="http://image.free.in.th/v/2013/is/211026123239.png" />
      </div>
    </div>
    <nav className="stroke">
      <ul>
        <li><a href="/mesproduct"><i className="fa fa-home " style={{fontSize: 30, color: 'white'}} /></a></li>
        <li><a href="/ListCom">สินค้า</a></li>
        
        <li><a href="/login">ออกจากระบบ</a></li>
        
        

      </ul>
    </nav>
  </section>
        </div>
    )
}
