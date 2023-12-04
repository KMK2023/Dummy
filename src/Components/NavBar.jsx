import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="NavBar">
      <ul
        className="menu"
        style={{
          justifyContent: "space-evenly",
          listStyle: "none",
          padding: 0,
          display: "flex",
          backgroundColor: "#cc7a32",
          color: "#fff",
        }}
      >
        <li>
          <NavLink to="/" style={navLinkStyle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" style={navLinkStyle}>
            LoginForm
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" style={navLinkStyle}>
            SignupForm
          </NavLink>
        </li>
        <li>
          <NavLink to="/currency" style={navLinkStyle}>
            Currency Converter
          </NavLink>
        </li>
        <li>
          <NavLink to="/country" style={navLinkStyle}>
            Country Selection
          </NavLink>
        </li>

        <li>
          <NavLink to="/Gallery" style={navLinkStyle}>
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to="/Cardslots" style={navLinkStyle}>
            Cardslots
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" style={navLinkStyle}>
            Contact us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

const navLinkStyle = {
  textDecoration: "none",
  color: "#fff",
  padding: "20px",
  borderRadius: "15px",
  transition: "background-color 0.3s ease",
};

export default NavBar;
