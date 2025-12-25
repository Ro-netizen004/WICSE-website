import { useState } from "react";
import { Link } from "react-router";

// Logo Component
const Logo = () => (
  <Link to="/home">
    <div className="flex items-center space-x-3 text-2xl font-bold tracking-tight text-[#AD88BE]">
      <img
        src="black_wisce.jpg"
        alt="WICSE Logo"
        className="w-10 h-10 object-contain rounded-full"
      />
      <span className="font-thin">WICSE</span>
    </div>
  </Link>
);

// Desktop Navigation Links
const DesktopNav = ({ items }) => (
  <div className="hidden md:flex mx-auto space-x-8 text-sm font-medium">
    {items.map((item, index) => (
      <Link
        key={index}
        to={`/${item.toLowerCase()}`}
        className="text-white hover:text-[#AD88BE] transition-colors"
      >
        {item}
      </Link>
    ))}
  </div>
);

// Desktop CTA Button
const DesktopCTA = () => (
  <div className="hidden md:flex">
    <Link
      to="/about"
      className="bg-transparent border border-white text-white hover:bg-[#AD88BE] hover:text-black font-semibold py-2 sm:py-3 px-6 sm:px-10 rounded-full transition duration-300 text-sm sm:text-base"
    >
      Learn more
    </Link>
  </div>
);

// Mobile Menu
const MobileMenu = ({ items, isOpen, closeMenu }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 w-full bg-black md:hidden z-50 shadow-lg">
      <ul className="flex flex-col items-center py-4 space-y-4 text-white">
        {items.map((item, index) => (
          <li key={index}>
            <Link
              to={`/${item.toLowerCase()}`}
              className="hover:text-[#AD88BE] transition-colors text-white"
              onClick={closeMenu}
            >
              {item}
            </Link>
          </li>
        ))}
        <li>
          <Link
            to="/about"
            className="bg-transparent border border-white text-white hover:bg-[#AD88BE] hover:text-black font-semibold py-2 sm:py-3 px-6 sm:px-10 rounded-full transition duration-300 text-sm sm:text-base"
            onClick={closeMenu}
          >
            Learn more
          </Link>
        </li>
      </ul>
    </div>
  );
};

// Mobile Menu Toggle Button
const MobileToggle = ({ toggle }) => (
  <div className="md:hidden flex items-center">
    <button className="focus:outline-none" onClick={toggle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-[#AD88BE]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Home", "About", "Team", "Membership", "Events", "Partners", "Contact"];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-black shadow-md sticky top-0 z-50">
      <Logo />
      <DesktopNav items={navItems} />
      <DesktopCTA />
      <MobileToggle toggle={toggleMenu} />
      <MobileMenu items={navItems} isOpen={isOpen} closeMenu={closeMenu} />
    </nav>
  );
};

export default Navbar;

