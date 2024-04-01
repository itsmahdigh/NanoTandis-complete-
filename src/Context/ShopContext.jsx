import React, { createContext } from "react";
import all_product from "../Components/Assets/all_product";
export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
        const contextvalue = { all_product }
        return (
                <ShopContextProvider value={contextvalue}>
                        {props.children}
                </ShopContextProvider>
        )
}
export default ShopContextProvider;