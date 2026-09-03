import { IoLogoJavascript } from "react-icons/io5";
import { SiPython } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io";

import "./Skill.css";

function Skill() {
  return (
    <section className="skillSection">
      <h2>Language</h2>
      <div className="languageList">
        <div className="icon">
          <IoLogoJavascript className="javascriptIcon" />
          <p>Javascript</p>
        </div>
        <div className="icon">
          <SiPython className="pythonIcon" />
          <p>Python</p>
        </div>
        <div className="icon">
          <TbSql className="sqlIcon" />
          <p>SQL</p>
        </div>
        <div className="icon">
          <ImHtmlFive className="htmlIcon" />
          <p>HTML</p>
        </div>
        <div className="icon">
          <IoLogoCss3 className="cssIcon" />
          <p>CSS</p>
        </div>
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
