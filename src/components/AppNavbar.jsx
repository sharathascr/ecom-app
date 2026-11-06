import "../styles/AppNavbar.css";
import { Link } from "react-router-dom";

function AppNavbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h2 className="nav-logo">My App</h2>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="nav-link">
              Signup
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default AppNavbar;
