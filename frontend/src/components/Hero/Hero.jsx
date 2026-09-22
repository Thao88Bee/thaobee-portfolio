import { useSelector } from "react-redux";
import heroImg from "/hero-img.png";
import resume from "/resume.pdf";
import Admin from "../Admin";
import { SiGithub } from "react-icons/si";
import { GrLinkedin } from "react-icons/gr";

import "./Hero.css";

function Hero() {
  const user = useSelector((state) => state.session.user);

  return (
    <>
      {!user ? (
        <section className="heroSection">
          <div className="heroImgContainer">
            <img
              className="heroImg"
              src={heroImg}
              alt="Bee Thao Profile Picture"
            />
          </div>
          <div className="heroInfoContainer">
            <h1>Bee Thao</h1>
            <h2>Software Engineer</h2>
            <span>
              <a
                className="githubLink"
                href="https://github.com/Thao88Bee"
                target="_blank"
                rel="noreferrer"
              >
                <SiGithub />
              </a>
              <br />
              <a
                className="linkedinLink"
                href="https://www.linkedin.com/in/bee-thao-336483330/"
                target="_blank"
                rel="noreferrer"
              >
                <GrLinkedin />
              </a>
            </span>
            <p className="description">
              I am a detail-oriented software engineer passionate about
              continuous learning and staying at the forefront of technology.
              Excel at solving complex, high-stakes problems and am dedicated to
              continuous improvement.
            </p>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              download="beethao_resume"
            >
              <button>Download Resume</button>
            </a>
          </div>
        </section>
      ) : (
        <>
          <Admin />
        </>
      )}
    </>
  );
}

export default Hero;
