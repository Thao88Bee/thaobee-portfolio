import poultryCenter from "/poultry-center.ico";

import "./Project.css";

function Project() {
  return (
    <section className="projectSection">
      <div className="poultryCenter">
        <a
          href="https://poultrycenter.onrender.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={poultryCenter} alt="Poultry Center Logo" />
        </a>
        <h2>Poultry Center</h2>
        <p>
          A web application all about poultry for poultry lovers, sharing
          idea&apos;s and concern&apos;s or just fun facts.
        </p>
      </div>
    </section>
  );
}

export default Project;
