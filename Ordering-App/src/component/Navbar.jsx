

import "./css/Navbar.css";


export default function Navbar({ theme, onToggleTheme }) {
  return (
    <nav className="navbar">
      

      <button className="theme-btn" onClick={onToggleTheme}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </nav>
  );
}
