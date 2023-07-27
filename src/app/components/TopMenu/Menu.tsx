import Link from "next/link";
import { useState } from "react";
import { navLinks } from "./data/navLinks";

const Menu = () => {
  const [activeRoute, setActiveRoute] = useState<string>("/");

  return (
    <nav>
      <ul className="flex items-center justify-end font-medium">
        {navLinks.map((link, index) => {
          return (
            <li
              key={index}
              className={`mx-4 relative p-2 border-b-4 ${
                activeRoute === link.route ? " border-green text-dark-blue font-bold" : "border-transparent"
              }`}
            >
              <Link href={link.route}>{link.name} </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
