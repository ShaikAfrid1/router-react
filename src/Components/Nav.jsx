import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex gap-10 justify-center p-4">
      <NavLink className={(e) => (e.isActive ? "text-pink-200" : "")} to="/">
        Home
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-pink-200" : "")}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-pink-200" : "")}
        to="/products"
      >
        Products
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-pink-200" : "")}
        to="/serviceses"
      >
        Serviceses
      </NavLink>
    </div>
  );
};

export default Nav;
