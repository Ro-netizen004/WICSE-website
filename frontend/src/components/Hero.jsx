import { motion } from "framer-motion";
import Socials from "./Socials";
import Features from "./Features";
import { Link } from "react-router";

// Video background component
const VideoBackground = () => (
  <>
    <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
      <source src="code.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="absolute inset-0 bg-black bg-opacity-85"></div>
  </>
);

// Call-to-action buttons
const CTAButtons = () => (
  <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center">
    <Link
      to="/membership"
      className="bg-[#AD88BE] hover:bg-[#C4A0D6] text-black font-semibold py-2 sm:py-3 px-6 sm:px-10 rounded-full transition duration-300 text-sm sm:text-base"
    >
      Join Us
    </Link>
    <Link
      to="/events"
      className="bg-transparent border border-white text-white hover:bg-[#AD88BE] hover:text-black font-semibold py-2 sm:py-3 px-6 sm:px-10 rounded-full transition duration-300 text-sm sm:text-base"
    >
      Upcoming Events
    </Link>
  </div>
);

// Hero content
const HeroContent = () => (
  <motion.div
    className="relative z-10 max-w-4xl text-center px-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
  >
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-[#AD88BE] leading-snug font-thin">
      WiCSE <span className="text-white">@ USF</span>
    </h1>
    <h3 className="text-base sm:text-lg md:text-xl lg:text-xl font-semibold mt-2 text-gray-200">
      Women in Computer Science and Engineering
    </h3>
    <p className="mt-4 sm:mt-6 text-gray-100 leading-relaxed text-sm sm:text-base md:text-sm font-thin">
      Empowering female students to thrive in tech at the University of South Florida's Bellini College of AI, Cybersecurity, and Computing. We provide mentorship, professional development, and a supportive community for women pursuing careers in technology. Join us in creating an inclusive future where women lead innovation in computing.
    </p>

    <CTAButtons />
    <Socials />
  </motion.div>
);

// Main Hero component
const Hero = () => (
  <>
    <div className="relative flex flex-col items-center justify-center px-6 py-32 text-center overflow-hidden">
      <VideoBackground />
      <HeroContent />
    </div>

    <Features />
  </>
);

export default Hero;
