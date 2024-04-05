import React, {useContext, useState} from 'react'
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '../Assets/لوگو تستی.png'
import { Link } from 'react-router-dom'
import {ShopContext} from "../../Context/ShopContext";
export const Navbar = () => {
	const [menu, setMenu] = useState('Home')
	const {getTotalCartItems}=useContext(ShopContext)
	return (
		<div className="navbar">
			<div className="nav-logo">
				<img src={Logo} alt="Logo" />
			</div>
			<ul className="nav-menu">
				<li onClick={() => { setMenu("Home") }}><Link style={{ textDecoration: 'none' }} to={"/"}>خانه</Link>{menu === "Home" ? <hr /> : <></>}</li>
				<li onClick={() => { setMenu("HomePro") }}><Link style={{ textDecoration: 'none' }} to={"/HomeProducts"}>خانگی</Link>{menu === "HomePro" ? <hr /> : <></>}</li>
				<li onClick={() => { setMenu("MedPro") }}> <Link style={{ textDecoration: 'none' }} to={"/MedicalProducts"}>بهداشتی</Link> {menu === "MedPro" ? <hr /> : <></>}</li>
				<li onClick={() => { setMenu("indPro") }}> <Link style={{ textDecoration: 'none' }} to={"/IndustryProducts"}>صنعتی</Link>{menu === "indPro" ? <hr /> : <></>}</li>
			</ul>
			<div className="nav-login-cart">
				<Link to={"/Login"}> <button>ورود</button> </Link>
				<Link to={"/Cart"}> <FontAwesomeIcon className='cart' icon="fa-solid fa-cart-shopping" /> </Link>
				<div className="nav-cart-count">{getTotalCartItems()}</div>
			</div>

		</div>
	)
}
