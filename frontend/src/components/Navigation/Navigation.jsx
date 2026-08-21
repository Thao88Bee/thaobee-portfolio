import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const navigate = useNavigate();
  const sessionUser = useSelector((state) => state.session.user);

  const goTo = (e, page) => {
    e.preventDefault();
    navigate(`/${page}`);
  };

  return (
    <>
      <div className="navBar">
        <div className="navBtnContainer">
          <button onClick={(e) => goTo(e, "")}>Bee Thao</button>
          <button onClick={(e) => goTo(e, "projects")}>Projects</button>
          <button onClick={(e) => goTo(e, "skills")}>Skills</button>
          <button onClick={(e) => goTo(e, "contact")}>Contact</button>
        </div>
        <div>{isLoaded && <ProfileButton user={sessionUser} />}</div>
      </div>
    </>
  );
}

export default Navigation;
