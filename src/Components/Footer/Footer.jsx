import React from 'react'
import './Footer.css'
import Logo from '../Assets/لوگو تستی.png'
const Footer = () => {
        return (
                <div className='footer'>
                        <div className="footer-logo">
                                <img src={Logo} alt="" />
                        </div>
                        <ul className="footer-links">
                                <li>خانگی</li>
                                <li>بهداشتی</li>
                                <li>صنعتی</li>
                                <li>درباره ما</li>
                                <li>تماس باما</li>
                        </ul>
                        <div className="footer-social-icon">
                                <div className="footer-icon-container">
                                        <img src="" alt="instagram logo" />
                                </div>
                                <div className="footer-icon-container">
                                        <img src="" alt="telegram logo" />
                                </div>
                                <div className="footer-icon-container">
                                        <img src="" alt="twiter logo" />
                                </div>
                        </div>
                        <div className="footer-copyright">
                                <hr />
                                <p>تمامی حقوق مادی و معنوی این وبسایت متلق به مهدی است!</p>
                        </div>
                </div>
        )
}
export default Footer