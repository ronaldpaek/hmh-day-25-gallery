import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ user, setUser }) => {
  const handleLogoutUser = () => {
    setUser({});
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          {user.username ? (
            `Welcome ${user.username}`
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
        <li className="navbar-item">
          {user.username ? (
            <Link to="/" onClick={handleLogoutUser}>
              Logout
            </Link>
          ) : (
            <Link to="/register">Register</Link>
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
