import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from "./pages/shop/shop";
import About from "./pages/about/about";
import Cart from "./pages/cart/cart";
import Nav from "./components/nav";
import Welcome from "./components/welcome";
import AddProduct from "./pages/add/add-product";
import { ShopContextProvider } from "./context/shopContext";
import Login from "./pages/login";
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Nav />
          <Welcome/>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/add-product" element={<AddProduct />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
