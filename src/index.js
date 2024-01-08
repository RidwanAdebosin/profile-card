import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "#C3DCAF",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#553B00",
  },
  {
    skill: "Vue",
    level: "beginner",
    color: "blue",
  },
  {
    skill: "HTML",
    level: "advanced",
    color: "orange",
  },
  { skill: "Git and GitHub", level: "intermediate", color: "#60DAFB" },
  {
    skill: "CSS",
    level: "advanced",
    color: "#E84F33",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} level={skill.level} color={skill.color} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <p>{skill}</p>
      <span>
        {level === "advanced"
          ? "💪"
          : "" || level === "intermediate"
          ? "👊"
          : "" || level === "beginner"
          ? "🤝"
          : ""}
      </span>
    </div>
  );
}

function Avatar() {
  return (
    <>
      <img src="/IMG_4415.JPG" alt="profile-dp" className="avatar" />
    </>
  );
}

function Intro() {
  return (
    <>
      <h1>Ridwan Adebosin</h1>
      <p>
        I am a FrontEnd Developer and Medical Laboratory Technician. When not
        coding or working in the Laboratory i like to play board games, cook and
        eat, or enjoy Nigeria wahala.
      </p>
    </>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
