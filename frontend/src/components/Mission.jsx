import { GiTargetShot } from "react-icons/gi";
import { AiOutlineEye } from "react-icons/ai";
import { FaHandsHelping } from "react-icons/fa";
import { motion } from "framer-motion";

const MissionVision = () => {
  return (
    <section className="relative py-32 px-6 sm:px-12 md:px-20 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="Mission.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Mission, Vision, Values Boxes */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white text-center">
        
        {/* Mission Box */}
        <motion.div
          className="border border-white p-8 sm:p-10 backdrop-blur-sm bg-black/30"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <GiTargetShot className="text-[8rem] sm:text-[9rem] mb-6 text-white mx-auto" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-thin mb-4">
            Our <span className="text-white">Mission</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            We create a supportive community that empowers female students to excel
            in Computer Science and Engineering through mentorship, professional growth,
            and hands-on learning opportunities.
          </p>
        </motion.div>

        {/* Vision Box */}
        <motion.div
          className="border border-white p-8 sm:p-10 backdrop-blur-sm bg-black/30"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        >
          <AiOutlineEye className="text-[8rem] sm:text-[9rem] mb-6 text-white mx-auto" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-thin mb-4">
            Our <span className="text-white">Vision</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Our vision extends beyond campus — building global connections, advocating for
            equitable opportunities, and fostering an environment where every woman’s voice
            in tech is heard, valued, and empowered to make a difference.
          </p>
        </motion.div>

        {/* Values Box */}
        <motion.div
          className="border border-white p-8 sm:p-10 backdrop-blur-sm bg-black/30"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
        >
          <FaHandsHelping className="text-[8rem] sm:text-[9rem] mb-6 text-white mx-auto" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-thin mb-4">
            Our <span className="text-white">Values</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
            <span className="text-white font-semibold">Empowerment:  </span> 
            We uplift women to lead confidently in tech.
          </p>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
            <span className="text-white font-semibold">Collaboration:  </span> 
            We believe in teamwork and shared growth.
          </p>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            <span className="text-white font-semibold">Innovation:  </span> 
            We encourage creativity and forward-thinking to shape a better future.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;


