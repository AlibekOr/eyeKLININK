import React from 'react'
import { data } from "../data"
import "../style/style.scss"
import { useDispatch } from 'react-redux'

const Home = () => {
    const dispatch = useDispatch()
    const handelClick = (id) => {
        dispatch({ type: 'AddItem', payload: id })
    }
    return (
        <div className='home'>
            <div className='home__block' >
                <div> <img src={data[0].img} alt="foto" /> </div>
                <div> car name:  {data[0].name} </div>
                <div> ${data[0].price} </div>
                <button onClick={() => handelClick(data[0])}>add to cart</button>
            </div>
            <div className='home__block' >
                <div> <img src={data[1].img} alt="foto" /> </div>
                <div> car name:  {data[1].name} </div>
                <div> ${data[1].price} </div>
                <button onClick={() => handelClick(data[1])}>add to cart</button>
            </div>
            <div className='home__block' >
                <div> <img src={data[2].img} alt="foto" /> </div>
                <div> car name:  {data[2].name} </div>
                <div> ${data[2].price} </div>
                <button onClick={() => handelClick(data[2])}>add to cart</button>
            </div>
        </div>
    )
}
export default Home