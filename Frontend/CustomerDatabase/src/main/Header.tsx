import Logo from "./logo.png";

interface HeaderProps {
  subtile: string;
}

const Header = ({ subtile }: HeaderProps) => {
  return (
    <header className="row mb-4">
      <div className="col-5">
        <img src={Logo} className="logo" alt="logo" />
      </div>
      <div className="col-7 mt-5 subtitle">{subtile}</div>
    </header>
  );
};

export default Header;
