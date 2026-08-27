import "./Skill.css";

function Skill() {
  return (
    <section className="skillSection">
      <h2>Language</h2>
      <div className="skillList">
        <p>Javascript</p>
        <p>Python</p>
        <p>SQL</p>
        <p>HTML</p>
        <p>CSS</p>
      </div>
      <h2>Technology</h2>
      <div className="skillList">
        <p>React.js</p>
        <p>Node.js</p>
        <p>Express.js</p>
        <p>Redux</p>
      </div>
      <hr />
      <div className="skillList">
        <p>Tailwind CSS</p>
        <p>Git</p>
        <p>GitHub</p>
        <p>SQLAlchemy</p>
      </div>
    </section>
  );
}

export default Skill;
