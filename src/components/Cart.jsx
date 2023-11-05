import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "../style/style.scss"
import PricesAll from './PricesAll'
const Cart = () => {
    const cartData = useSelector((state) => state.cart)
    const { allPirce } = PricesAll()
    const dispatch = useDispatch()

    const handelClick = (id) => {
        dispatch({ type: 'Remove', payload: { id } })
    }

    const icrement = (id) => {
        dispatch({ type: 'AddItem', payload: { id } })
    }

    const decrement = (id) => {
        dispatch({ type: 'Decrement', payload: { id } })
    }


    return (
        <div className='cartPage'>
            <div>
                <button onClick={() => dispatch({ type: 'Reset' })}>Reset</button>
                <div>total price:$ {allPirce} </div>
            </div>
            <div className='cartPage__pruduct'>
                {
                    cartData.map((item) => (
                        <div key={item.id}>
                            <div> {item.name} </div>
                            <div><img src={item.img} alt="" /></div>
                            <div className='price'>
                                <div> ${item.price} </div>
                                <button onClick={() => handelClick(item.id)}>&times;</button>
                            </div>
                            <div className='coutn'>
                                <button onClick={() => icrement(item.id)}>+</button>
                                <span>{item.qty} </span>
                                <button onClick={() => decrement(item.id)}>-</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cart