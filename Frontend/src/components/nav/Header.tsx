import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.webp";

interface HeaderProps {
  subtitle: string;
}

const Header = ({ subtitle }: HeaderProps) => {
  return (
    <header className="container-fluid p-3  border-bottom mb-4 shadow bg-light">
      <div className="d-flex flex-wrap align-items-center justify-content-between">
        <nav className="d-flex flex-wrap mb-3 mb-lg-0">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `btn px-3 me-2 mb-2 text-decoration-none ${
                isActive ? "btn-primary text-white" : "btn-light text-dark"
              }`
            }>
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `btn px-3 me-2 mb-2 text-decoration-none ${
                isActive ? "btn-primary text-white" : "btn-light text-dark"
              }`
            }>
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `btn px-3 mb-2 text-decoration-none ${
                isActive ? "btn-primary text-white" : "btn-light text-dark"
              }`
            }>
            Contact
          </NavLink>
        </nav>
        <div className="d-flex align-items-center text-center text-lg-end">
          <div className="me-3">
            <h1 className="text-primary fw-bold mb-1 fs-4">
              Customer Database
            </h1>
            <p className="text-muted mb-0">{subtitle}</p>
          </div>
          <img
            src={Logo}
            alt="Customer Database Logo"
            className="img-fluid rounded-circle border border-2"
            style={{ width: "60px", height: "60px" }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
