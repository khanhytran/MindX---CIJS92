import React, { useState } from 'react'
import { productsList } from '../data/data'
import "./style.css"
import ProductItem from './ProductItem'

export default function Homepage() {
    const [cart, setCart] = useState([])

    const addToCart = (id) => {
        let newCart = [...cart]
        let findCartItem = newCart.findIndex((it) => {
            return it.id == id
        });
        if (findCartItem == -1) {
            newCart.push({
                id: id,
                sl: 1
            })
        }
        else {
            newCart[findCartItem].sl++
        }
        setCart(newCart)

    }
    const renderContent = () => {
        return productsList.map((item) => {
            return <ProductItem item={item} addToCart={addToCart} key={item.id} />
        })
    }
    const renderCartList = () => {
        return cart.map((item) => {
            let itemInfo = productsList.find((it) => {
                return it.id == item.id
            })
            return <tr key={item.id}>
                <td>{itemInfo.name}</td>
                <td>{Number(itemInfo.price).toLocaleString()}</td>
                <td>{item.sl}</td>
                <td>{(Number(item.sl) * Number(itemInfo.price)).toLocaleString()}đ</td>
            </tr>
        })
    }
    return (
        <div className='content'>
            <h1>All Product</h1>
            <div>
                {/* Button trigger modal */}
                <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">
                    View Cart
                </button>
                {/* Modal */}
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Cart List</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table border={1}>
                                    <thead>
                                        <tr>
                                            <th>Tên sản phẩm</th>
                                            <th>Giá</th>
                                            <th>Số lượng</th>
                                            <th>Thành tiền</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {renderCartList()}
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='productList'>
                {renderContent()}
            </div>
        </div>
    )
}
