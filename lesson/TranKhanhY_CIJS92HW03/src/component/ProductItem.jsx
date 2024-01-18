import React from 'react'

export default function ProductItem(props) {
    console.log(props.dataItem)
  return (
    <div className='item'>
        <img src={props.dataItem.img} alt="picture" />
        <h1>{props.dataItem.name}</h1>
        <p className='price'>{props.dataItem.price.toLocaleString('en-US', { minimumFractionDigits: 3 })}</p>
        <p>Chipset: {props.dataItem.chip}</p>
        <p>Kích thước màn hình: {props.dataItem.sizeScreen}</p>
        <p>RAM: {props.dataItem.ram}</p>
        <p>Bộ nhớ trong: {props.dataItem.rom}</p>
        <button className='btn'><span><i class="fa fa-plus"></i></span>Thêm vào so sánh</button>
    </div>
  )
}
