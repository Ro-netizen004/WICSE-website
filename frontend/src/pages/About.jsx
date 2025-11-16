import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router";
import { useEffect } from "react";

const About = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-black text-gray-200 px-6 sm:px-12 md:px-24 py-20">

        {/* Header */}
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl sm:text-7xl md:text-6xl font-thin mb-6 text-white">
            About <span className="text-[#AD88BE]">WiCSE</span>
          </h1>
          <p className="text-lg font-thin text-gray-300 leading-relaxed">
            The Women in Computer Science and Engineering (WiCSE) organization at
            the University of South Florida’s Bellini College of AI, Cybersecurity,
            and Computing is dedicated to empowering female students in technology.
            We foster a supportive environment through mentorship, workshops, and
            professional development, helping members thrive in academics and beyond.
          </p>
          <div className="mt-6 w-24 h-1 bg-[#AD88BE] mx-auto rounded-full"></div>
        </motion.div>

        {/* Mission & Vision */}
        <div className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 gap-16">
          <motion.div
            className="bg-[#0b0b0b] p-8 rounded-2xl shadow-lg border border-[#AD88BE]/40"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl font-thin text-[#AD88BE] mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              To create a strong, inclusive community that supports women in
              computer science and engineering through education, mentorship, and
              leadership opportunities. We aim to inspire innovation and encourage
              members to pursue impactful careers in technology.
            </p>
          </motion.div>

          <motion.div
            className="bg-[#0b0b0b] p-8 rounded-2xl shadow-lg border border-[#AD88BE]/40"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl font-thin text-[#AD88BE] mb-4">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed">
              We envision a future where women in tech lead the way in shaping
              tomorrow’s digital world — breaking barriers, driving innovation, and
              building an inclusive culture across the tech industry.
            </p>
          </motion.div>
        </div>

        {/* Partners Section */}
        <motion.div
          className="max-w-4xl mx-auto mt-24 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-3xl font-thin text-[#AD88BE] mb-4">Our Partners</h2>
          <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
            We’re grateful to our partners for collaborating with us to support,
            uplift, and empower women in computing and engineering through events,
            mentorship, and community engagement.
          </p>
          <div className="mt-6 w-16 h-1 bg-[#AD88BE] mx-auto rounded-full"></div>

          {/* Partners Page Button */}
          <Link
            to="/partners"
            className="inline-block mt-10 bg-[#AD88BE] hover:bg-[#9c6ab7] text-white font-semibold py-3 px-10 rounded-full transition-all duration-300"
          >
            Meet Our Partners
          </Link>
        </motion.div>

      </section>
      <Footer />
    </>
  );
};

export default About;

