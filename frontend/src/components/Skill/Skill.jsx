import { IoLogoJavascript } from "react-icons/io5";
import { SiPython } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { SiSqlalchemy } from "react-icons/si";

import "./Skill.css";

function Skill() {
  return (
    <section className="skillSection">
      <h2>Language</h2>
      <div className="skillList">
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
        <div className="icon">
          <FaReact className="reactIcon" />
          <p>React.js</p>
        </div>
        <div className="icon">
          <FaNodeJs className="nodeIcon" />
          <p>Node.js</p>
        </div>
        <div className="icon">
          <SiExpress className="expressIcon" />
          <p>Express.js</p>
        </div>
        <div className="icon">
          <SiRedux className="reduxIcon" />
          <p>Redux</p>
        </div>
      </div>
      <hr />
      <div className="skillList">
        <div className="icon">
          <SiTailwindcss className="tailwindIcon" />
          <p>Tailwind CSS</p>
        </div>
        <div className="icon">
          <FaGitAlt className="gitIcon" />
          <p>Git</p>
        </div>
        <div className="icon">
          <SiGithub className="githubIcon" />
          <p>GitHub</p>
        </div>
        <div className="icon">
          <SiSqlalchemy className="sqlalchemyIcon" />
          <p>SQLAlchemy</p>
        </div>
      </div>
    </section>
  );
}

export default Skill;
