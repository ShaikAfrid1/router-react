import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import About from "../Components/About";
import Products from "../Components/Products";
import Serviceses from "../Components/Serviceses";

const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/serviceses" element={<Serviceses />} />
      </Routes>
    </div>
  );
};

export default Mainroutes;
