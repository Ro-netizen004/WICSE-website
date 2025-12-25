import { Link } from "react-router";
import Socials from "./Socials"; // Import the modular Socials component

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 sm:px-12 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo / Name */}
        <Link to="/home">
          <div className="flex items-center space-x-3 text-2xl font-thin tracking-tight text-[#AD88BE]">
            <img
              src="black_wisce.jpg"
              alt="WICSE Logo"
              className="w-10 h-10 rounded-full object-contain"
            />
            <span>WICSE</span>
          </div>
        </Link>

        {/* Links */}
        <ul className="flex flex-wrap gap-6 text-sm font-medium justify-center md:justify-start">
          {["Home", "About", "Team", "Events", "Contact"].map((link, index) => (
            <li key={index} className="hover:text-[#AD88BE] cursor-pointer">
              <Link to={`/${link.toLowerCase()}`}>{link}</Link>
            </li>
          ))}
        </ul>

        {/* Socials */}
        <Socials />

      </div>

      {/* Bottom line */}
      <div className="mt-8 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} WICSE @ USF. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
