import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import projects from "../data/projects";
import usePageStyles from "../hooks/usePageStyles";

function ProjectPage() {
  const navigate = useNavigate();
  const [projectIndex, setProjectIndex] = useState(0);
  const project = useMemo(() => projects[projectIndex], [projectIndex]);

  usePageStyles(["/styles/nav.css", "/styles/project.css"]);

  useEffect(() => {
    window.localStorage.setItem("instructionsShown", "true");

    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowUp":
        case "ArrowDown":
          event.preventDefault();
          navigate("/");
          break;
        case "ArrowLeft":
          event.preventDefault();
          setProjectIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
          break;
        case "ArrowRight":
          event.preventDefault();
          setProjectIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  return (
    <>
      <h1 id="resume-header">Home</h1>

      <div id="body-outer-section">
        <h1 id="about-header">&lt;</h1>

        <div id="body">
          <section id="main-body">
            <img id="image" src={project.image} alt={`${project.title} website`} />

            <div id="inner-content">
              <h1 id="h1">{project.title}</h1>
              <p id="p">{project.description}</p>
              <h3>Tech Stack</h3>
              <ul id="tech">
                {project.techStack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          </section>

          <section id="link-body">
            <a id="git" href={project.git}>
              <img id="git-img-icons" src="/images/github.png" alt="Github icon" /> <p>Github</p>
            </a>

            <a
              id="live"
              href={project.live || "#"}
              onClick={(event) => {
                if (!project.live) {
                  event.preventDefault();
                }
              }}
            >
              <img id="live-img-icons" src="/images/open-icon.png" alt="Open icon" />
              <p>{project.live ? "Live" : "No Live"}</p>
            </a>
          </section>
        </div>

        <h1 id="project-header">&gt;</h1>
      </div>

      <h1 id="event-header">Home</h1>
    </>
  );
}

export default ProjectPage;
