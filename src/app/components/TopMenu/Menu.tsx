//import Link from "next/link";
import { useEffect, useState } from "react";
import { MenuItem, navLinks } from "./data/navLinks";

import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const Menu = () => {
  const [isActiveLinkHome, setIsActiveHomeLink] = useState(true);
  const [activeRoute, setActiveRoute] = useState<MenuItem>(navLinks[0]);

  useEffect(() => {
    const link = window.location.pathname;

    const activeLink = navLinks.filter((i) => i.route === link);
    activeLink.length > 0
      ? setIsActiveHomeLink(true)
      : setIsActiveHomeLink(false);
  }, [activeRoute]);

  return (
    <nav className="">
      <ul className="lg:flex lg:items-center lg:justify-end font-medium">
        {navLinks.map((link, index) => {
          return (
            <li
              key={index}
              className={`mx-4 relative p-2 border-b-4 ${
                activeRoute.route === link.route
                  ? " border-green text-dark-blue font-bold"
                  : "border-transparent"
              }`}
            >
              {isActiveLinkHome === true ? (
                <Link
                  to={link.route}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={200}
                  onSetActive={() => {
                    setActiveRoute(link);
                    console.log("link", link.route);
                  }}
                  className="cursor-pointer"
                >
                  {link.name}{" "}
                </Link>
              ) : (
                <a href={`${link.route}`}>{link.name}</a>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
