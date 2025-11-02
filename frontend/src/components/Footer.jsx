import React from "react";
import { Link } from "react-router";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const socials = [
    { href: "https://www.facebook.com/groups/wicseusf/", icon: FaFacebook },
    { href: "https://www.instagram.com/wicseusf/", icon: FaInstagram },
    { href: "https://www.linkedin.com/company/usf-wicse/posts/?feedView=all", icon: FaLinkedin },
  ];

  return (
    <footer className="bg-black text-white py-12 px-6 sm:px-12 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo / Name */}
        <Link to = "/home">
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
          <li className="hover:text-[#AD88BE] cursor-pointer"><Link to="/home">Home</Link></li>
          <li className="hover:text-[#AD88BE] cursor-pointer"><Link to="/about">About</Link></li>
          <li className="hover:text-[#AD88BE] cursor-pointer"><Link to="/team">Team</Link></li>
          <li className="hover:text-[#AD88BE] cursor-pointer"><Link to="/events">Events</Link></li>
          <li className="hover:text-[#AD88BE] cursor-pointer"><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Socials */}
        <div className="flex gap-4 text-white text-lg">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#AD88BE] cursor-pointer"
            >
              {React.createElement(social.icon, { size: 24 })}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-8 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} WICSE @ USF. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

