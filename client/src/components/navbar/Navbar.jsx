import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
         <Link to="/" style={{ color: "inherit", textDecoration: "none",marginTop: "20px" }}>
          <span className="logo">lamabooking</span>
        </Link>
        {user ? user.username : (
          <div className="navItems">
           
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
              <button className="navButton">Register</button>
              <button className="navButton">Login</button>
            </ul>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
