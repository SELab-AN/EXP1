import { APP_CONFIG } from "../config/constants";

function Header() {
  return (
    <header className="header">
      <h1>{APP_CONFIG.title}</h1>
      <nav className="nav-bar">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#tasks">Tasks</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;