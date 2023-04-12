import { FaLinkedin, FaGithub } from "react-icons/fa";
import imageLink from "../../assets/nate.jpg";
const AboutMe = () => {
  return (
    <>
      <img
        src={imageLink}
        className="w-32 m-2 mx-auto border-2 shadow border-white/25 rounded-2xl"
        alt="Nathaniel Bachelder"
      />
      <section className="max-w-[50em] grow mx-auto">
        <h3 className="text-2xl text-center underline align-baseline font-kumbh">
          About Me
        </h3>
        <p className="text-lg">
          Welcome to my website! My name is Nathaniel Bachelder, and I'm a 4th-year student in the Computing and Information Technologies program at RIT. As someone who is autistic, I have always been drawn to the logical and structured nature of technology, which has fueled my passion for this field. I have honed my skills in various areas of computing, including software  development, database design, and system administration.
        <br /> <br />
          Throughout my academic journey, I have taken on challenging projects and collaborated with diverse teams, gaining valuable experience in problem-solving, project management, and effective communication. My website includes a copy of my resume and a portfolio of other web projects that I have worked on. I invite you to explore my website and learn more about me and my work. Thank you for considering my application, and I look forward to the opportunity to work with you!
        </p>
      </section>
      <nav className="sticky bottom-0 flex justify-around font-bold">
        <a href="https://www.linkedin.com/in/nrwbachelder/">
          <FaLinkedin className="w-9 h-9" />
        </a>
        |
        <a href="https://github.com/CodeNate02">
          <FaGithub className="w-9 h-9" />
        </a>
      </nav>
    </>
  );
};
export default AboutMe;
