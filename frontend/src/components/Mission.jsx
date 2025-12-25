import { GiTargetShot } from "react-icons/gi";
import { AiOutlineEye } from "react-icons/ai";
import { FaHandsHelping } from "react-icons/fa";
import { motion } from "framer-motion";

const infoBoxes = [
  {
    title: "Mission",
    icon: GiTargetShot,
    animation: { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 }, delay: 0 },
    content: "We create a supportive community that empowers female students to excel in Computer Science and Engineering through mentorship, professional growth, and hands-on learning opportunities."
  },
  {
    title: "Vision",
    icon: AiOutlineEye,
    animation: { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 }, delay: 0.2 },
    content: "Our vision extends beyond campus — building global connections, advocating for equitable opportunities, and fostering an environment where every woman’s voice in tech is heard, valued, and empowered to make a difference."
  },
  {
    title: "Values",
    icon: FaHandsHelping,
    animation: { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 }, delay: 0.4 },
    content: [
      { label: "Empowerment", text: "We uplift women to lead confidently in tech." },
      { label: "Collaboration", text: "We believe in teamwork and shared growth." },
      { label: "Innovation", text: "We encourage creativity and forward-thinking to shape a better future." }
    ]
  }
];

const InfoBox = ({ icon: Icon, title, animation, content }) => (
  <motion.div
    className="border border-white p-8 sm:p-10 backdrop-blur-sm bg-black/30"
    initial={animation.initial}
    animate={animation.animate}
    transition={{ duration: 1.2, ease: "easeOut", delay: animation.delay }}
  >
    <Icon className="text-[8rem] sm:text-[9rem] mb-6 text-white mx-auto" />
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-thin mb-4">
      Our <span className="text-white">{title}</span>
    </h2>
    {Array.isArray(content) ? (
      content.map((item, index) => (
        <p key={index} className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
          <span className="text-white font-semibold">{item.label}: </span>{item.text}
        </p>
      ))
    ) : (
      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{content}</p>
    )}
  </motion.div>
);

const MissionVision = () => (
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

    {/* Boxes */}
    <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white text-center">
      {infoBoxes.map((box, index) => (
        <InfoBox key={index} {...box} />
      ))}
    </div>
  </section>
);

export default MissionVision;



