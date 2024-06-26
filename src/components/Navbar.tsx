import { useState } from "react";
import { MENU_LINKS, ICONS } from "../utils/constants";

const MobileHamburgerMenu = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu((current) => !current);
  };

  const closeMenu = () => {
    setMobileMenu(false);
  };

  return (
    <div className="sm:hidden">
      <div className="fixed top-0 left-0 right-0 z-10 flex justify-end p-4 bg-medium-grey">
        <button onClick={toggleMenu}>
          <img src={ICONS.APPS} className="w-8" />
        </button>
      </div>
      {mobileMenu && (
        <nav className="fixed flex flex-col justify-center w-full px-8 py-4 text-white h-svh bg-medium-grey">
          <ul className="flex flex-col gap-8">
            {MENU_LINKS.map((item, index) => (
              <li
                className={`${item.color}`}
                key={`mobile-${item.title}-${index}`}
              >
                <a href={item.link} onClick={closeMenu}>
                  <h5>{item.title}</h5>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

const DesktopNavbar = () => {
  return (
    <nav className="fixed z-10 hidden w-full text-white sm:block bg-medium-grey">
      <ul className="flex justify-end gap-8 px-16 py-8">
        {MENU_LINKS.map((item, index) => (
          <li
            className={`${item.color}`}
            key={`desktop-${item.title}-${index}`}
          >
            <a href={item.link}>
              <h5>{item.title}</h5>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Navbar = () => {
  return (
    <div>
      <MobileHamburgerMenu />
      <DesktopNavbar />
    </div>
  );
};

export default Navbar;
