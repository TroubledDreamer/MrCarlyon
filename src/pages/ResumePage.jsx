import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import usePageStyles from "../hooks/usePageStyles";

function ResumePage() {
  const navigate = useNavigate();

  usePageStyles(["/styles/nav.css", "/styles/resume.css"]);

  useEffect(() => {
    window.localStorage.setItem("instructionsShown", "true");

    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        navigate("/");
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  return (
    <div id="body-outer-section">
      <h1 id="about-header" style={{ marginLeft: "20px" }}>
        Home
      </h1>

      <section id="body-section">
        <h1 className="middlers">Carlyon Jones-Armour</h1>

        <div>
          <h3 className="middlers">
            <a href="mailto:carlyonja@gmail.com">carlyonja@gmail.com</a> | +1 (876) 844-5789 |
            LinkedIn:{" "}
            <a href="https://jm.linkedin.com/in/carlyon-jones-armour-3639801b5">
              Carlyon Jones-Armour
            </a>{" "}
            | Git: <a href="https://github.com/TroubledDreamer">https://github.com/TroubledDreamer</a>{" "}
            | Kingston, Jamaica
          </h3>
        </div>

        <h2 className="middlers">EDUCATION AND INVOLVEMENT</h2>

        <p>
          <strong>The University of the West Indies, Mona, Jamaica</strong> (Graduating May 2025)
          2022-Present
          <br />
          Bachelor of Science in Computer Science
          <br />
          Award: 2022/2023 Top Level 2 Computer Science Prize
          <br />
          Relevant Coursework: Intro to Computing, Object-Oriented Programming, Net-Centric
          Networking, <br />
          Discrete Mathematics, Software Engineering, Dynamic Web Development, Systems Programming
          <br />
        </p>
        <br />
        <p>
          <strong>Co-Founder &amp; VP: Rex Computing Society,</strong> The University of the West
          Indies April 2023-Present
          <br />
          As Vice President of the Computing Society, I drive impactful weekly meetings with over
          20 attendees and lead strategic initiatives in networking and planning. Committed to
          enhancing our community, I foster connections, organize dynamic events, and bridge the gap
          between coding and industry.
        </p>

        <h2 className="middlers">PROJECTS</h2>

        <p>
          <strong>Language_Study_Application</strong>
          <br />
          Link: https://github.com/TroubledDreamer/Language_Study_Application.git
          <br />
          - A collaborative project enabling users to enhance language skills through diverse question
          styles.
          <br />
          - Tech Stack: Java (Object Oriented programming)
          <br />
        </p>

        <p>
          <strong>CountryFinder</strong>
          <br />
          Link: https://github.com/TroubledDreamer/CountryFinder
          <br />
          - Using databases, server-side code, and client-side code this project can retrieve data on
          any country.
          <br />
          - Tech Stack: HTML, CSS, Javascript (client-side), PHP (server-side), MySQL.
          <br />
        </p>

        <h2 className="middlers">Work Experience</h2>

        <p>
          <strong>Adjunct Laboratory Assistant - The University of the West Indies </strong>
          September 2023 - Present
          <br />
          - Supervised, evaluated, and supported over 35 computing students weekly in Python and
          Java Hackerranks, assignments, and coding projects.
          <br />
          - Resolved technical issues for 100+ students, ensuring smooth functionality of personal
          systems.
          <br />
          - Utilized a tech stack that includes Python and Java (Object Oriented programming).
          <br />
        </p>

        <p>
          <strong>Code Camp Tutor - Mona GeoInformatics Institute</strong> July 2023
          <br />
          - Instructed and managed different groups of 10 children daily and increased teaching
          efficiency by 30%.
          <br />
          - Taught web development basics (HTML, JavaScript, and CSS) and AI image recognition.
          <br />
          - Extended educational initiatives to foster homes and women&apos;s centres across 8
          Caribbean countries.
          <br />
        </p>

        <h2 className="middlers">SKILLS AND INTERESTS</h2>

        <p>
          <strong>Tech Stack:</strong> JavaScript, PHP, HTML, CSS, MySQL, React, React-Native, C,
          Python, C#.
          <br />
          <strong>Skills:</strong> Teaching, Leadership, Problem-Solving, Adaptability, Teamwork,
          Public Speaking, Creativity.
          <br />
          <strong>Languages:</strong> English (Native), Mandarin (Beginner), Spanish (Beginner).
          <br />
          <strong>Interests:</strong> Teaching Content Creation, Community Building, App dev, Game
          dev, and AI.
          <br />
        </p>
      </section>

      <h1 id="project-header" style={{ marginRight: "20px" }}>
        Home
      </h1>
    </div>
  );
}

export default ResumePage;
