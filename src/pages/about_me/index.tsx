import { FaLinkedin, FaGithub } from "react-icons/fa";
const AboutMe = () => {
  return (
    <>
      <img
        src="/assets/nate.jpg"
        className="w-32 m-2 mx-auto border-2 shadow border-white/25 rounded-2xl"
      />
      <section className="max-w-[50em] grow mx-auto">
        <h3 className="text-2xl text-center underline align-baseline font-kumbh">
          About Me
        </h3>
        <p>
          My name is Nathaniel Bachelder. I'm a third-year student at the
          Rochester Institute of Technology in their Computing and Information
          Technologies program.
          <br/>
          
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
