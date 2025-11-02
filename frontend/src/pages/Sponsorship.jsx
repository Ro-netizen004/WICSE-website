import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { sponsors } from "../data/sponsors.js";
import SponsorForm from "../components/SponsorForm.jsx";
import Footer from "../components/Footer.jsx";

const Sponsorship = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <section className="bg-black text-white py-20 px-12 sm:px-12 md:px-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-thin text-[#AD88BE] mb-4 tracking-wide">
            Our Supporters
          </h1>
          <h2 className="text-gray-200 text-2xl font-extralight">
            Sponsors & Partners
          </h2>
          <p className="text-base sm:text-lg mt-10 leading-relaxed font-thin">
            Our sponsors play a vital role in empowering women in computing and engineering.
            Through their partnership, we host workshops, mentorship programs, and events
            that inspire the next generation of female leaders in technology.
          </p>
          <div className="mt-4 w-24 h-1 bg-[#AD88BE] mx-auto rounded-full"></div>
        </motion.div>

        {/* Sponsors Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-12"
        >
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {sponsors.map((sponsor) => (
              <motion.a
                key={sponsor.name}
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-black p-8 rounded-2xl text-center border border-transparent hover:border-[#AD88BE]/40 transition-all duration-300 cursor-pointer"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="mx-auto mb-6 w-40 sm:w-48 md:w-56 lg:w-64 h-16 sm:h-20 md:h-24 object-contain"
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Sponsor Form */}
      <SponsorForm />
      <Footer />
    </>
  );
};

export default Sponsorship;

