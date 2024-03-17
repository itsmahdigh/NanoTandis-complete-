import React from 'react'
import "./popular.css"
import PopularData from '../Assets/PopularData'
import Item from '../Item/item'
 const popular = () => {
	return (
		<div className='popular'>
			<h2>محبوب ترین ها در خانگی</h2>
			<hr />
			<div className="popular-item">
				{PopularData.map((item, i) => {
					return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
				})}
			</div>
		</div>
	)
}
export default popular