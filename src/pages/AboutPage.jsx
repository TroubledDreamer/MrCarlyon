import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import usePageStyles from "../hooks/usePageStyles";

function AboutPage() {
  const navigate = useNavigate();

  usePageStyles(["/styles/about.css"]);

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
    <>
      <h1>Home</h1>
      <section id="body-section">
        <p>
          Hello, I&apos;m Carlyon Jones-Armour, originally from Dominica and Trinidad. I find
          joy in programming, assisting others, and teaching, with a side interest in web
          design. With over 3 years of programming experience, I work with CSS, SQL, PHP,
          JavaScript, HTML, WordPress, React/React Native, Java, C, and Python. Additionally,
          I have familiarity with C+ and C#.
          <br />
          <br />
          I hold an Associate Degree in Information Technology from CFBC College and currently
          serve as an Adjunct Laboratory Assistant at the University of the West Indies,
          concurrently participating in the Starapples AI seed program. My current focus
          revolves around expanding my skills in full-stack application development and AI.
          <br />
          <br />
          As a current student at UWI, my aspiration is to become a software engineer, explore
          the world, and create cool projects.
        </p>
      </section>
      <h1>Home</h1>
    </>
  );
}

export default AboutPage;
