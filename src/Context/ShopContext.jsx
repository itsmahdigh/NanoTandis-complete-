import React, { createContext } from "react";
import All_product from "../Components/Assets/all_product";
export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const contextvalue =  All_product
    return (
        <ShopContext.Provider value={contextvalue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;