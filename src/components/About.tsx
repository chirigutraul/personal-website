import AccentText from "./AccentText";
import grinding from "../assets/grinding.gif";

const About = () => {
  return (
    <div
      id="about"
      className="px-8 py-8 text-white md:py-16 min-h-svh bg-gradient-to-t from-black to-medium-grey md:px-16"
    >
      <div className="grid grid-cols-1 gap-16 navbar-margin xl:grid-cols-2">
        <div className="flex flex-col gap-8">
          <div id="#title-container" className="">
            <h1>About me</h1>
          </div>
          <div className="max-w-[120ch]">
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
        <div className="flex">
          <img src={grinding} alt="Grinding" className="rounded-[2rem]" />
        </div>
      </div>
    </div>
  );
};

export default About;
