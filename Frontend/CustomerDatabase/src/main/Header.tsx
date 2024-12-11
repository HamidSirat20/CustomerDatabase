import Logo from "./logo.png";

interface HeaderProps {
  subtitle: string;
}

const Header = ({ subtitle }: HeaderProps) => {
  return (
    <header className="row mb-4 p-4 rounded ">
      {/* Logo Section */}
      <div className="col-md-4 d-flex align-items-center justify-content-center">
        <img
          src={Logo}
          className="logo img-fluid rounded-circle border border-2 border-primary"
          alt="Customer Database Logo"
          style={{ maxWidth: "150px" }}
        />
      </div>

      {/* Subtitle Section */}
      <div className="col-md-8 d-flex flex-column align-items-start justify-content-center">
        <h1 className="text-primary fw-bold mb-3">Customer Database</h1>
        <p className="lead text-muted">{subtitle}</p>
      </div>
    </header>
  );
};

export default Header;
