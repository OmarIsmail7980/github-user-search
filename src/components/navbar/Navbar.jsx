import { useState } from "react";
import darkMode from "../../assets/icon-moon.svg";
import lightMode from "../../assets/icon-sun.svg";
import "./Navbar.css";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const [modeToggle, setModeToggle] = useState(true);
  const { toggleTheme } = useTheme();

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <h1 className="navbar__title">devfinder</h1>
        <div className="navbar__modes">
          {modeToggle ? (
            <>
              <p>Dark</p>{" "}
              <img
                src={darkMode}
                alt="moon"
                onClick={() => {
                  toggleTheme();
                  setModeToggle((prevValue) => !prevValue);
                }}
              />
            </>
          ) : (
            <>
              <p>Light</p>{" "}
              <img
                src={lightMode}
                alt="sun"
                onClick={() => {
                  toggleTheme();
                  setModeToggle((prevValue) => !prevValue);
                }}
              />
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
