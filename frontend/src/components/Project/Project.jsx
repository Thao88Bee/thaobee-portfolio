import poultryCenter from "/poultry-center.ico";

import "./Project.css";

function Project() {
  return (
    <section className="projectSection">
      <div className="project">
        <div className="projectTitleImg">
          <h2>Poultry Center</h2>
          <a
            href="https://poultrycenter.onrender.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={poultryCenter} alt="Poultry Center Logo" />
          </a>
        </div>
        <div className="projectDescription">
          <p>
            A web application all about poultry for poultry lovers, sharing
            idea&apos;s and concern&apos;s or just fun facts.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Project;
