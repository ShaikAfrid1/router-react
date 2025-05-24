import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import About from "../Components/About";
import Products from "../Components/Products";
import Serviceses from "../Components/Serviceses";
import ProductDetail from "../Components/ProductDetail";
import ServiceDetail from "../Components/ServiceDetails";

const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/detail/:name" element={<ProductDetail />} />
        <Route path="/serviceses" element={<Serviceses />}>
          <Route path="/serviceses/detail" element={<ServiceDetail />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Mainroutes;
