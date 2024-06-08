import Button from "./Button";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView();
  };

  return (
    <div
      id="hero-section"
      className="px-8 py-20 text-white min-h-svh bg-gradient-to-b from-black to-medium-grey md:py-40 md:px-16"
    >
      <div className="flex flex-col gap-32 navbar-margin md:grid-cols-2 md:flex-row md:justify-between">
        <div id="#greeting-container" className="flex flex-col gap-16">
          <div id="#text-container" className="flex flex-col max-w-xl gap-4">
            <h1>
              Hi, I'm <a className="text-primary">Raul</a>
            </h1>
            <h4>Crafting robust software as a solution for your problems</h4>
          </div>
          <div>
            <Button
              text="Let's connect!"
              size="large"
              type="primary"
              onClick={scrollToContact}
            />
          </div>
        </div>
        <div id="#artwork-container" className=""></div>
      </div>
    </div>
  );
};

export default Hero;