import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 sm:px-12 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo / Name */}
        <div className="flex items-center space-x-3 text-2xl font-bold tracking-tight text-[#AD88BE]">
          <img src="black_wisce.jpg" alt="WICSE Logo" className="w-10 h-10 rounded-full object-contain" />
          <span>WICSE</span>
        </div>

        {/* Links */}
        <ul className="flex flex-wrap gap-6 text-sm font-medium justify-center md:justify-start">
          <li className="hover:text-[#AD88BE] cursor-pointer">Home</li>
          <li className="hover:text-[#AD88BE] cursor-pointer">About</li>
          <li className="hover:text-[#AD88BE] cursor-pointer">Team</li>
          <li className="hover:text-[#AD88BE] cursor-pointer">Events</li>
          <li className="hover:text-[#AD88BE] cursor-pointer">Contact</li>
        </ul>

        {/* Socials */}
        <div className="flex gap-4 text-white text-lg">
          <FaFacebook className="hover:text-[#AD88BE] cursor-pointer" />
          <FaInstagram className="hover:text-[#AD88BE] cursor-pointer" />
          <FaLinkedin className="hover:text-[#AD88BE] cursor-pointer" />
          <FaTwitter className="hover:text-[#AD88BE] cursor-pointer" />
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
