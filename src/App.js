import Shop from "./Pages/Shop";
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import { Component } from "react";

library.add(fas, faTwitter, faFontAwesome)


class App extends Component {
  render() {
    return (<div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path="/HomeProducts"
            element={<ShopCategory banner={"بنر محصولات خانگی"} category="HomeProducts" />}></Route>

          <Route path="/MedicalProducts" element={<ShopCategory banner={"بنر محصولات بهداشتی"}
            category="MedicalProducts" />}></Route>
          <Route path="/IndustryProducts" element={<ShopCategory banner={"بنر محصولات صنعتی"}
            category="IndustryProducts" />}></Route>

          <Route path="/product" element={<Product />}>
            <Route path=":productId"></Route>
          </Route>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/Login" element={<LoginSignup />}></Route>
        </Routes>
        <Footer />
        <Outlet />
      </BrowserRouter>
    </div>);
  }

}

export default App;
