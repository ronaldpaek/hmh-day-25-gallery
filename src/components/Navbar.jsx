import { NavLink, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogoutUser = () => {
    setUser({});
    navigate("/");
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink to="/" exact className="navbar-link" activeClassName>
            Home
          </NavLink>
        </li>
        <li className="navbar-item">
          {user.username ? (
            `Welcome ${user.username}`
          ) : (
            <NavLink to="/login" exact className="navbar-link" activeClassName>
              Login
            </NavLink>
          )}
        </li>
        <li className="navbar-item">
          {user.username ? (
            <button onClick={handleLogoutUser} className="navbar-button">
              Logout
            </button>
          ) : (
            <NavLink
              to="/register"
              exact
              className="navbar-link"
              activeClassName
            >
              Register
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
  }),
  setUser: PropTypes.func.isRequired,
};

export default Navbar;
