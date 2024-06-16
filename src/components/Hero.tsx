import { useState } from "react";
import Button from "./Button";
import ModelRender from "./ModelRender";
import Toggle from "./Toggle";

const Hero = () => {
  const [guideLines, setGuideLines] = useState<Boolean>(false);
  const [isBMOFloating, setIsBMOFloating] = useState<Boolean>(false);
  const [isBMORotating, setIsBMORotating] = useState<Boolean>(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView();
  };

  const toggleBMOFloating = () => {
    setIsBMOFloating((current) => !current);
  };

  const toggleBMORotation = () => {
    setIsBMORotating((current) => !current);
  };

  const toggleGuideLines = () => {
    setGuideLines((current) => !current);
  };

  return (
    <div
      id="hero-section"
      className="px-8 py-20 text-white min-h-svh bg-gradient-to-b from-black to-medium-grey md:py-40 md:px-16"
    >
      <div className="flex flex-col items-center gap-16 md:flex-row navbar-margin xl:justify-between">
        <div id="#greeting-container" className="flex flex-col gap-16">
          <div
            id="#text-container"
            className="flex flex-col max-w-xl md:min-w-[70ch] gap-4"
          >
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
        <div id="artwork-container" className="w-full max-w-full aspect-video">
          <ModelRender
            guideLines={guideLines}
            isBMOFloating={isBMOFloating}
            isBMORotating={isBMORotating}
          />
          <div className="flex flex-col items-end gap-4">
            <h5 className="text-light-grey">Play with BMO</h5>
            <div id="bmo-controlls" className="flex gap-8">
              <Toggle
                title="Guide lines"
                isToggled={guideLines}
                onToggle={toggleGuideLines}
              />
              <Toggle
                title="Floating"
                isToggled={isBMOFloating}
                onToggle={toggleBMOFloating}
              />
              <Toggle
                title="Rotate"
                isToggled={isBMORotating}
                onToggle={toggleBMORotation}
              />
            </div>
            {/* <Button
              text={guideLines ? "Hide Guide Lines" : "Show Guide Lines"}
              size="small"
              type="primary"
              onClick={() => makeBMOJump(!guideLines)}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
