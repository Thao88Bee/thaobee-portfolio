import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import { ThemeContext } from "../../common/ThemeContext";
import { PiSunFill } from "react-icons/pi";
import { PiMoonFill } from "react-icons/pi";

import "./Navigation.css";

function Navigation({ isLoaded }) {
  const useTheme = () => useContext(ThemeContext);
  const { theme, toggleTheme } = useTheme();

  const sessionUser = useSelector((state) => state.session.user);

  const themeIcon =
    theme === "light" ? (
      <PiSunFill onClick={toggleTheme} />
    ) : (
      <PiMoonFill className="lightMoon" onClick={toggleTheme} />
    );

  return (
    <>
      {!sessionUser ? (
        <div className="navBar">
          <div className="navLinkContainer">
            {themeIcon}
            <NavLink className="navLink" to={""}>
              About
            </NavLink>
            <NavLink className="navLink" to={"skills"}>
              Skills
            </NavLink>
            <NavLink className="navLink" to={"projects"}>
              Projects
            </NavLink>
            <NavLink className="navLink" to={"contact"}>
              Contact
            </NavLink>
          </div>
          <div>{isLoaded && <ProfileButton user={sessionUser} />}</div>
        </div>
      ) : (
        <div className="navBar">
          {themeIcon}
          <div>{isLoaded && <ProfileButton user={sessionUser} />}</div>
        </div>
      )}
    </>
  );
}

export default Navigation;
