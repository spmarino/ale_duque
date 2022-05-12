import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav">
     
      <Link to="/productos/electronicos" className="nav__link">
        electronicos
      </Link>
      <Link to="/productos/alimentos" className="nav__link">
        alimentos
      </Link>
      <Link to="/productos/ropa" className="nav__link">
        ropa
      </Link>
    </nav>
  );
};

export default NavBar;
