import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <>
      {!sessionUser ? (
        <div className="navBar">
          <div className="navLinkContainer">
            <NavLink className="navLink" to={""}>
              About
            </NavLink>
            <NavLink className="navLink" to={"projects"}>
              Projects
            </NavLink>
            <NavLink className="navLink" to={"skills"}>
              Skills
            </NavLink>
            <NavLink className="navLink" to={"contact"}>
              Contact
            </NavLink>
          </div>
          <div>{isLoaded && <ProfileButton user={sessionUser} />}</div>
        </div>
      ) : (
        <div className="LoginNavBar">
          <div>{isLoaded && <ProfileButton user={sessionUser} />}</div>
        </div>
      )}
    </>
  );
}

export default Navigation;
