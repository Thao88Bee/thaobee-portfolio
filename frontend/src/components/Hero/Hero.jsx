import { useSelector } from "react-redux";
import heroImg from "/hero-img.png";

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
            <h1>
              Bee <br /> Thao
            </h1>
            <h2>Software Engineer</h2>
            <span>
              <button>
                <a
                  href="https://www.github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </button>
              <br />
              <button>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </button>
            </span>
            <p className="description">
              A detail-oriented software engineer passionate about continuous
              learning and staying at the forefront of technology. Excel at
              solving complex, high-stakes problems and am dedicated to
              continuous improvement.
            </p>
          </div>
        </section>
      ) : (
        <section className="heroSection">
          <div className="heroImgContainer">
            <img
              className="heroImg"
              src={heroImg}
              alt="Bee Thao Profile Picture"
            />
          </div>
        </section>
      )}
    </>
  );
}

export default Hero;
