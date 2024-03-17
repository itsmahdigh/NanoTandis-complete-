import React from 'react'
import "./Hero.css"
import Img from '../Assets/testImg.png'
export const Hero = () => {
	return (
		<div className='hero'>
			<div className="hero-right">
				<h1>شرکت نانو مهرگان صبا</h1>
				<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
					و در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
				</p>
				<button>محصولات محبوب</button>
			</div>
			<div className="hero-left">
				<img src={Img} alt="Main  img" />
			</div>
		
		</div>
	)
}
