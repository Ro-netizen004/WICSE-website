import { motion } from "framer-motion";

const TeamCard = ({ name, role, image, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="w-64 h-80 p-6 rounded-2xl shadow-lg text-center flex flex-col justify-end relative overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-black/10"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-end text-white">
        <h3 className="text-xl font-light text-[#AD88BE]">{name}</h3>
        <p className="mt-1 font-extralight">{role}</p>
      </div>
    </motion.div>
  );
};

export default TeamCard;

