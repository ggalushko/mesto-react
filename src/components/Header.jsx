import logo from "../images/logo.svg";

export function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Логотип Mesto Russia" className="header__logo" />
    </header>
  );
}
