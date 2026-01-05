import { motion } from "framer-motion";

const TeamCard = ({ name, role, image, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="w-full max-w-md p-4 rounded-2xl flex items-center gap-4 bg-white border" // removed shadow, added border
    >
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full object-cover flex-shrink-0"
      />

      {/* Text */}
      <div className="flex flex-col justify-center">
        <h3 className="text-xl font-light text-[#AD88BE]">{name}</h3>
        <p className="mt-1 font-extralight text-gray-700">{role}</p>
      </div>
    </motion.div>
  );
};

export default TeamCard;


