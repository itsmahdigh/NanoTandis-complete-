import React, {useContext} from 'react'
import './CSS/ShopCategory.css'
import {ShopContext} from "../Context/ShopContext";
import Item from "../Components/Item/item";
const ShopCategory = (props) => {

    const all_product = useContext(ShopContext)
    return (
        <div className={"shop-category"}>
            <h1 className={'shopcategory-banner'}>{props.banner}</h1>
            <div className="shopcategory-indexsort">
                <p>
                    <span>نمایش1-12</span>از 36 محصول
                </p>
                <div className="shopcategory-sort">
                    <p>
                        sort by <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height={15} width={15}>
                        <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                    </p>
                </div>
            </div>
                <div className="shopcategory-products">
                    {
                        all_product.map((item,i)=>{
                            if (props.category===item.category){
                                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                            }
                            else{
                                return null
                            }
                        })
                    }
                </div>
            <div className="shopcategory-loadmore">
                بیشتر
            </div>


        </div>
    )
}
export default ShopCategory
