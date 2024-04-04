import React, {Component} from 'react';
import './RelatedProducts.css'
import popularData from "../Assets/PopularData";
import Item from "../Item/item";

class RelatedProducts extends Component {
    render() {
        return (
            <div className={'relatedproducts'}>
                <h1>شاید بپسندید!</h1>
                <hr/>
                <div className="relatedproducts-item">
                    {popularData.map((item, i) => {
                        return <Item key={i} id={item.id} name={item.name} image={item.img} new_price={item.new_price}
                                     old_price={item.old_price}/>


                    })}
                </div>
            </div>
        );
    }
}

export default RelatedProducts;