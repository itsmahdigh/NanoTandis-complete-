import React from 'react'
import './Offers.css'
import Img3 from '../Assets/test3.jpg'
const Offers = () => {
    return (
        <div className='offers'>
            <div className="offers-right">
                <h1>بهترین</h1>
                <h1>تخفیف ها برای شما</h1>
                <p>فقط از بهترین فروشنده ها</p>
                <button>ببینمش!</button>
            </div>
            <div className="offers-left">
                <img src={Img3} alt="" />
            </div>

        </div>
    )
}
export default Offers