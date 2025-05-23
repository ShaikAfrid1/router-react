import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex gap-10 justify-center p-4">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
      <Link to="/serviceses">Serviceses</Link>
    </div>
  );
};

export default Nav;
