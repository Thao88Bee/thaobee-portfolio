import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <>
      <div className="nav-bar">
        <div className="nav-links-section">
          <NavLink to="/">About</NavLink>
          <NavLink to="/">Projects</NavLink>
          <NavLink to="/">Skills</NavLink>
          <NavLink to="/">Contact</NavLink>
        </div>
        <div>{isLoaded && <ProfileButton user={sessionUser} />}</div>
      </div>
    </>
  );
}

export default Navigation;
