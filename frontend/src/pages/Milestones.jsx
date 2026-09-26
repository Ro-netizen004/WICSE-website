import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { Link } from "react-router";

const milestones = [
  {
    date: "Spring 2026",
    title: "20+ Mentors",
    subtitle: "Coffee with WiCSE",
    description:
      "Coffee with WiCSE connected students with more than 20 mentors from industry, creating opportunities for meaningful conversations, advice, and connections.",
  },
  {
    date: "Spring 2026",
    title: "80+ Bookings & Calls",
    subtitle: "Coffee with WiCSE",
    description:
      "Coffee with WiCSE reached more than 80 bookings and calls during Spring 2026, helping students connect with professionals through one-on-one conversations.",
  },
  {
    date: "April 17, 2026",
    title: "Collaborative Excellence Award",
    subtitle: "USF Engineering Banquet",
    description:
      "WiCSE was recognized with the Collaborative Excellence Award at the 2026 USF Engineering Banquet.",
  },
];

const Milestones = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-black text-gray-200 px-6 sm:px-12 md:px-24 py-20">

        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl sm:text-7xl md:text-6xl font-thin mb-6 text-white">
            WiCSE <span className="text-[#AD88BE]">Milestones</span>
          </h1>

          <p className="text-lg font-thin text-gray-300 leading-relaxed">
            Celebrating the accomplishments, connections, and moments that
            continue to shape the WiCSE community.
          </p>

          <div className="mt-6 w-24 h-1 bg-[#AD88BE] mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto mt-20 grid md:grid-cols-3 gap-8">

          {milestones.map((milestone, index) => (
            <motion.div
                key={milestone.title}
                className="bg-[#0b0b0b] p-8 rounded-2xl shadow-lg border border-[#AD88BE]/40"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                >

              <div className="relative">
                <p className="text-sm font-medium text-[#AD88BE] mb-6">
                  {milestone.date}
                </p>

               
                <h2 className="text-3xl font-thin text-white mb-3">
                  {milestone.title}
                </h2>

                <h3 className="text-lg font-thin text-[#AD88BE] mb-5">
                  {milestone.subtitle}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

        <motion.div
        className="max-w-4xl mx-auto mt-24 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        >
        <h2 className="text-3xl font-thin text-[#AD88BE] mb-4">
            And We're Just Getting Started
        </h2>

        <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Every connection, event, and achievement helps us build a stronger
            community for women in computer science and engineering.
        </p>

        <div className="mt-6 w-24 h-1 bg-[#AD88BE] mx-auto rounded-full"></div>

        <Link
            to="/membership"
            className="inline-block mt-10 bg-[#AD88BE] hover:bg-[#9c6ab7] text-white font-semibold py-3 px-10 rounded-full transition-all duration-300"
        >
            Join Us
        </Link>

        </motion.div>

      </section>

      <Footer />
    </>
  );
};

export default Milestones;