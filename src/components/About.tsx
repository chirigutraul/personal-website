import AccentText from "./AccentText";

const About = () => {
  return (
    <div
      id="#hero-section"
      className="px-8 py-20 text-white min-h-svh bg-gradient-to-t from-black to-medium-grey md:px-16"
    >
      <div className="navbar-margin">
        <div id="#title-container" className="">
          <h1>About me</h1>
        </div>
        <div>
          <h4>
            Hello! <br /> <br /> I am Chirigut Raul, a committed and
            enthusiastic Software Engineer with a focus on{" "}
            <AccentText text="full stack web development" />. <br /> <br /> My
            mission is to <AccentText text="craft software" /> that makes a
            positive impact on the world, and I strive to bring rational
            thinking and strong problem-solving skills to every project I
            undertake.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default About;
