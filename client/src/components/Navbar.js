import React from 'react'

export default function Navbar() {
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
        <li><a href="/"><i className="fa fa-home " style={{fontSize: 30, color: 'white'}} /></a></li>
        <li><a href="/ListCom">สินค้า</a></li>
        <li><a href="/">วิธีการสั่งสินค้า </a></li>
        <li><a href="/">ส่งหลักฐานการชำระเงิน</a></li>
        <li><a href="/">รายการจัดส่งสินค้า</a></li>
        <li><a href="/cart"><i className="fas fa-shopping-cart" />Cart </a></li>

      </ul>
    </nav>
  </section>
</div>

    )
}