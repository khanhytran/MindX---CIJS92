import React from 'react'

export default function ProductItem(props) {
  return (
    <div className="card text-left productItem">
      <img className="card-img-top" src={props.item.img} alt />
      <div className="card-body">
        <p className="card-title">{props.item.name}</p>
        <h5 className="price">Giá: {Number(props.item.price).toLocaleString()} đ</h5>
        <button className='btn btn-success' onClick={()=>{props.addToCart(props.item.id)}}>Add to card</button>
      </div>
    </div>
  )
}
