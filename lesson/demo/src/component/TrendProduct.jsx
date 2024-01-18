import React from 'react'
import ProductItem from './ProductItem'

export default function TrendProduct(props) {
  return (
    <div className='trend_product'>
        <h3>TOP 10 ĐIỆN THOẠI ĐƯỢC YÊU THÍCH NHẤT</h3>
        <div className='product_list'>
        <ProductItem dataItem = {props.data[0]}/>
        <ProductItem dataItem = {props.data[1]}/>
        <ProductItem dataItem = {props.data[2]}/>
        <ProductItem dataItem = {props.data[3]}/>
        <ProductItem dataItem = {props.data[4]}/>
        </div>
    </div>
  )
}
