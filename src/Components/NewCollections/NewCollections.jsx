import React from 'react'
import "./NewCollections.css"
import Collections from '../Assets/Collections'
import Item from '../Item/item'
const NewCollections = () => {
    return (
        <div className='new-collections'>
            <h1>جدیدترین ها</h1>
            <hr />
            <div className="collections">
                {Collections.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />                })}
            </div>
        </div>
    )
}
export default NewCollections