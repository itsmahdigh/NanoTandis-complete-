import Shop from "./Pages/Shop";
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { BrowserRouter, Routes, Route } from "react-router-dom"


import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
library.add(fas, faTwitter, faFontAwesome)


function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path="/HomeProducts" element={<ShopCategory category="HomeProducts" />}></Route>

          <Route path="/MedicalProducts" element={<ShopCategory category="MedicalProducts" />}></Route>
          <Route path="/IndustryProducts" element={<ShopCategory category="IndustryProducts" />}></Route>

          <Route path="/product" element={<Product />}>
            <Route path=":productId"></Route>

          </Route>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/Login" element={<LoginSignup />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
