//import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "./data/navLinks";
import * as Scroll from "react-scroll";
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
  const [activeRoute, setActiveRoute] = useState<string>("/");

  useEffect(() => {
    console.log("selected",activeRoute);
  }, [activeRoute]);

  return (
    <nav className="">
      <ul className="lg:flex lg:items-center lg:justify-end font-medium">
        {navLinks.map((link, index) => {
          return (
            <li
              key={index}
              className={`mx-4 relative p-2 border-b-4 ${
                activeRoute === link.route
                  ? " border-green text-dark-blue font-bold"
                  : "border-transparent"
              }`}
            >
              <Link
                to={link.route}
                spy={true}
                smooth={true}
                offset={50}
                duration={200}
                onSetActive={() => {
                  setActiveRoute(link.route);
                  console.log("link",link.route);
                }}
                className="cursor-pointer"
              >
                {link.name}{" "}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
