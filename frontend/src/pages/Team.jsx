import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TeamCard from "../components/TeamCard";
import { teams } from "../data/teams.js";

// Page Header
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
      <p className="text-gray-300 mt-6 font-light max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>
    )}
    <div className="mt-6 w-24 h-1 bg-[#AD88BE] mx-auto rounded-full"></div>
  </motion.div>
);

// Helper: split array into chunks of given size
const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

// Team Section
const TeamSection = ({ category, members }) => {
  if (!members || members.length === 0) return null;

  // Separate President, VPs, and rest
  const president = members[0] ? [members[0]] : [];
  const vps = members.length > 1 ? members.slice(1, 3) : [];
  const rest = members.length > 3 ? members.slice(3) : [];
  const restChunks = chunkArray(rest, 2);

  // Choose grid class: single = 1 col centered, multiple = 2 cols max
  const getGridClass = (rowMembers, cols = 2) =>
    rowMembers.length === 1
      ? "grid grid-cols-1 justify-items-center gap-6 mb-6"
      : `grid grid-cols-1 sm:grid-cols-${cols} justify-items-center gap-6 mb-6`;

  return (
    <div className="space-y-6 mb-12 text-center">
      <div className="text-2xl font-thin text-black mb-6">{category}</div>

      {/* President row */}
      {president.length > 0 && (
        <div className={getGridClass(president)}>
          {president.map((person, idx) => (
            <TeamCard
              key={idx}
              name={person.name}
              role={person.role}
              image={person.image}
              link={person.link}
              delay={idx * 0.05}
              textColor="black"
            />
          ))}
        </div>
      )}

      {/* VPs row */}
      {vps.length > 0 && (
        <div className={getGridClass(vps, 2)}>
          {vps.map((person, idx) => (
            <TeamCard
              key={idx}
              name={person.name}
              role={person.role}
              image={person.image}
              link={person.link}
              delay={idx * 0.05}
              textColor="black"
            />
          ))}
        </div>
      )}

      {/* Rest of team */}
      {restChunks.map((chunk, idx) => (
        <div key={idx} className={getGridClass(chunk, 2)}>
          {chunk.map((person, i) => (
            <TeamCard
              key={i}
              name={person.name}
              role={person.role}
              image={person.image}
              link={person.link}
              delay={i * 0.05}
              textColor="black"
            />
          ))}
        </div>
      ))}
    </div>
  );
};

// Team Page
const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = Object.keys(teams);

  return (
    <>
      <Navbar />

      {/* Header Section */}
      <section className="bg-black text-white px-6 sm:px-12 md:px-24 py-24">
        <PageHeader
          title="Meet the Team"
          subtitle="The People Behind WiCSE"
          description="Our organization is powered by passionate students dedicated to uplifting women in computing and engineering. Each department works together to create meaningful events, foster community, and support future leaders in tech."
        />
      </section>

      {/* Team Sections */}
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


