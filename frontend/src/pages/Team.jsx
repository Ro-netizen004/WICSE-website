import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TeamCard from "../components/TeamCard";
import { teams } from "../data/teams.js";

const PageHeader = ({ title, subtitle, description }) => (
  <motion.div
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center mb-16"
  >
    <h1 className="text-7xl text-[#AD88BE] font-thin">{title}</h1>
    <h2 className="text-2xl text-white mt-3 font-extralight tracking-wide">{subtitle}</h2>
    {description && (
      <p className="text-gray-300 mt-6 font-light max-w-2xl mx-auto leading-relaxed">{description}</p>
    )}
    <div className="mt-6 w-24 h-1 bg-[#AD88BE] mx-auto rounded-full"></div>
  </motion.div>
);

const TeamSection = ({ category, members }) => (
  <div className="space-y-6 mb-12">
    <div className="text-2xl font-thin text-black mb-6 text-center">{category}</div>
    <div className="flex flex-wrap justify-center gap-4">
      {members.map((person, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-xs mx-auto">
          <TeamCard
            name={person.name}
            role={person.role}
            image={person.image}
            delay={index * 0.05}
            textColor="black" // optional if TeamCard supports dynamic text color
          />
        </div>
      ))}
    </div>
  </div>
);

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = Object.keys(teams);

  return (
    <>
      <Navbar />

      {/* Header Section (Black) */}
      <section className="bg-black text-white px-6 sm:px-12 md:px-24 py-24">
        <PageHeader
          title="Meet the Team"
          subtitle="The People Behind WiCSE"
          description="Our organization is powered by passionate students dedicated to uplifting women in computing and engineering. Each department works together to create meaningful events, foster community, and support future leaders in tech."
        />
      </section>


      {/* Team Section (White) */}
      <section className="bg-white text-black px-6 sm:px-12 md:px-24 py-20">
        {categories.map((category) => (
          <TeamSection
            key={category}
            category={category}
            members={teams[category]}
          />
        ))}
      </section>

      <Footer />
    </>
  );
};

export default Team;
