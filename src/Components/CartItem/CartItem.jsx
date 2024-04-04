import React, {useContext} from 'react';
import './CartItem.css'
import {ShopContext} from "../../Context/ShopContext";

function CartItem() {
    const {all_product, cartItems, removeFromCart} = useContext(ShopContext)

    return (
        <div className={'cartitems'}>
            <div className="cartitems-format-main">
                <p>محصول</p>
                <p>نام</p>
                <p>قیمت</p>
                <p>تعداد</p>
                <p>جمع</p>
                <p>حذف</p>
            </div>
            <hr/>
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    console.log(e)
                    return <div>
                        <div className="cartitems-format cartitems-format-main">
                            <img src={e.img} alt="" className="carticon-product-icon"/>
                            <p>{e.name}</p>
                            <p>{e.new_price}</p>
                            <button className="cartitems-quantity">{cartItems[e.id]}</button>
                            <p>{e.new_price * cartItems[e.id]}تومان</p>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className={'cartitems-remove-icon'}
                                     onClick={() => {
                                         removeFromCart(e.id)
                                     }}
                                     viewBox="0 0 384 512">
                                    <path
                                        d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                                </svg>
                            </div>

                        </div>

                    </div>
                }
                    return null
            }

            )

            }
        </div>
    );
}

export default CartItem;