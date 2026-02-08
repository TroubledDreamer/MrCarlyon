import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import usePageStyles from "../hooks/usePageStyles";

const experiences = [
  {
    title: "Adjunct Laboratory Assistant - The University of the West Indies",
    dates: "September 2023 - Present",
    bullets: [
      "Supervised, evaluated, and supported over 35 computing students weekly in Python and Java Hackerranks, assignments, and coding projects.",
      "Resolved technical issues for 100+ students, ensuring smooth functionality of personal systems.",
      "Utilized a tech stack that includes Python and Java (Object Oriented programming).",
    ],
  },
  {
    title: "Code Camp Tutor - Mona GeoInformatics Institute",
    dates: "July 2023",
    bullets: [
      "Instructed and managed different groups of 10 children daily and increased teaching efficiency by 30%.",
      "Taught web development basics (HTML, JavaScript, and CSS) and AI image recognition.",
      "Extended educational initiatives to foster homes and women's centers across 8 Caribbean countries.",
    ],
  },
  {
    title: "Vice President/Co-founder - Rex Nettleford Hall Computing Society",
    dates: "Mar 2023 - Present",
    bullets: [
      "As Vice President of the Computing Society, I lead impactful weekly meetings with over 20 participants and drive strategic initiatives in networking and planning.",
      "Committed to enhancing the community, I foster connections, organize dynamic events, and bridge the gap between education and industry.",
    ],
  },
  {
    title: "Web Developer - St. Kitts-Nevis-Anguilla National Bank Limited",
    dates: "Jun 2022 - Aug 2022",
    bullets: [
      "Web Development Internship: Interned at St. Kitts-Nevis-Anguilla National Bank Limited as a web developer for two months.",
      "Edited and debugged over 30 errors on the bank's website and assisted in network cable management during the internship.",
    ],
  },
  {
    title: "Game Jam 2023",
    dates: "July 2023",
    bullets: [
      "Actively participated in Game Jam 2023 as a lead developer overseeing a team of 7 members.",
      "Led the creation of a 3D game using Unity, resulting in a top 1112 ranking among participating games.",
    ],
  },
];

function ExperiencePage() {
  const navigate = useNavigate();
  const hoverContainerRef = useRef(null);
  const [floatingImage, setFloatingImage] = useState({
    visible: false,
    left: 0,
    top: 0,
  });

  usePageStyles(["/styles/nav.css", "/styles/experience.css"]);

  useEffect(() => {
    window.localStorage.setItem("instructionsShown", "true");

    const handleKeyDown = (event) => {
      if (
        event.key === "ArrowUp" ||
        event.key === "ArrowDown" ||
        event.key === "ArrowLeft" ||
        event.key === "ArrowRight"
      ) {
        event.preventDefault();
        navigate("/");
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  const hideImage = () => {
    setFloatingImage((prev) => ({ ...prev, visible: false }));
  };

  const moveImage = (event) => {
    const containerRect = hoverContainerRef.current?.getBoundingClientRect();
    if (!containerRect) {
      return;
    }

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const outside =
      mouseX <= containerRect.left + 3 ||
      mouseX >= containerRect.right - 3 ||
      mouseY <= containerRect.top + 5 ||
      mouseY >= containerRect.bottom - 20;

    if (outside) {
      hideImage();
      return;
    }

    setFloatingImage({
      visible: true,
      left: mouseX,
      top: mouseY,
    });
  };

  return (
    <>
      <h1 id="resume-header">Home</h1>

      <div id="body-outer-section">
        <h1 id="about-header">Home</h1>

        <section id="container">
          <div
            className="hoverContainer"
            onMouseMove={moveImage}
            onMouseLeave={hideImage}
            ref={hoverContainerRef}
          >
            <div id="item">
              <div id="item_head">
                <p>{experiences[0].title}</p>
                <p>{experiences[0].dates}</p>
              </div>
              <div id="item_body">
                <ul>
                  {experiences[0].bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <img
            className="hover-image"
            id="floatingImage"
            src="/images/labtech.jpg"
            alt="Hover"
            style={{
              display: floatingImage.visible ? "block" : "none",
              left: `${floatingImage.left}px`,
              top: `${floatingImage.top}px`,
            }}
          />

          {experiences.slice(1).map((experience) => (
            <div id="item" key={experience.title}>
              <div id="item_head">
                <p>{experience.title}</p>
                <p>{experience.dates}</p>
              </div>

              <div id="item_body">
                <ul>
                  {experience.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        <h1 id="project-header">Home</h1>
      </div>

      <h1 id="event-header">Home</h1>
    </>
  );
}

export default ExperiencePage;
