import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import usePageStyles from "../hooks/usePageStyles";

function HomePage() {
  const navigate = useNavigate();
  const [cardVisible, setCardVisible] = useState(
    () => !window.localStorage.getItem("instructionsShown"),
  );

  usePageStyles(["/styles/style.css", "/styles/home.css"]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (cardVisible) {
        setCardVisible(false);
        window.localStorage.setItem("instructionsShown", "true");
        return;
      }

      switch (event.key) {
        case "ArrowUp":
          event.preventDefault();
          navigate("/resume");
          break;
        case "ArrowDown":
          event.preventDefault();
          navigate("/experience");
          break;
        case "ArrowLeft":
          event.preventDefault();
          navigate("/about");
          break;
        case "ArrowRight":
          event.preventDefault();
          navigate("/projects");
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [cardVisible, navigate]);

  return (
    <>
      <div id="instruction-card" className={cardVisible ? "visible" : ""}>
        <div style={{ margin: "10px" }}>
          <img id="intro" src="/images/arrow-key-icon.png" alt="" />
          <p>
            Use your <strong>Arrow Keys</strong> to navagate my site!!!
          </p>
        </div>
      </div>

      <h1 id="resume-header">Resume</h1>

      <div id="body-outer-section">
        <h1 id="about-header">About</h1>

        <section id="body-inner-section">
          <img id="main-image" src="/images/Mrcarlyon.png" alt="Picture of carlyon" />

          <div id="main-textarea">
            <h2>Carlyon Jones-Armour</h2>
            <h3>Full Stack developer</h3>
            <p>I live to program and create cool stuff.</p>

            <p>Java | HTML | CSS | JavaScript | PHP | SQL | React | Python | C</p>

            <a href="https://www.linkedin.com/in/carlyon-jones-armour-3639801b5/">
              <img src="/images/linkedin.png" alt="linkedin" />
            </a>
            <a href="https://github.com/TroubledDreamer">
              <img src="/images/github.png" alt="github" />
            </a>
            <a href="https://www.instagram.com/carlyonjones/">
              <img src="/images/instagram.png" alt="instagram" />
            </a>
          </div>
        </section>

        <h1 id="project-header">Project</h1>
      </div>

      <h1 id="event-header">Experiences</h1>
    </>
  );
}

export default HomePage;
