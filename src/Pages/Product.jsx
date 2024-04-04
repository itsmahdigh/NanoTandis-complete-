import React, {useContext} from 'react'
import {ShopContext} from "../Context/ShopContext";
import {useParams} from "react-router-dom";
import BreadCrum from "../Components/Breadcrum/BreadCrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import all_product from "../Components/Assets/all_product";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
const Product = () => {
    const All_product = useContext(ShopContext);

    const {productId} = useParams()
    // const product = this.all_product.map(row=>{
    //     row.find((e) => e.id === Number(productId))
    // })
    const product=All_product.find((e)=>e.id===Number(productId))
        // .find((e) => e.id === Number(productId))

    return (
        <div>
            <BreadCrum product={product}/>
            <ProductDisplay product={product}/>
            <DescriptionBox/>
        </div>
    )
}
export default Product
