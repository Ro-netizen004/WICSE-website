import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TeamCard from "../components/TeamCard";
import { teams } from "../data/teams.js";

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = Object.keys(teams);
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-black text-white px-6 sm:px-12 md:px-24 py-20">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-7xl text-[#AD88BE] font-thin">Meet the Team</h1>
          <h2 className="text-2xl text-white mt-3 font-extralight tracking-wide">
            The People Behind WiCSE
          </h2>
          <p className="text-gray-300 mt-6 font-light max-w-2xl mx-auto leading-relaxed">
            Our organization is powered by passionate students dedicated to uplifting 
            women in computing and engineering. Each department works together to 
            create meaningful events, foster community, and support future leaders in tech.
          </p>
          <div className="mt-6 w-24 h-1 bg-[#AD88BE] mx-auto rounded-full"></div>
        </motion.div>

        {/* TEAM SECTIONS */}
        <div className="space-y-20">
          {categories.map((category) => (
            <div key={category}>
              {/* Category Title */}
              <div className="text-2xl font-thin text-white mb-6 text-center">{category}</div>

              {/* Responsive Flex Container */}
              <div className="flex flex-wrap justify-center gap-4">
                {teams[category].map((person, index) => (
                  <div 
                    key={index}
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-xs mx-auto"
                  >
                    <TeamCard
                      name={person.name}
                      role={person.role}
                      image={person.image}
                      delay={index * 0.05}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Team;
