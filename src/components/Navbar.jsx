import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar-wrapper">
      <Link to={"/"}>Home</Link>
      <Link to={"/login"}>Login</Link>
      <Link to={"/register"}>Register</Link>
    </nav>
  );
};

export default Navbar;
