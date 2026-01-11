import { motion } from "framer-motion";

const TeamCard = ({ name, role, major, image, link, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 max-w-sm md:max-w-md"
    >
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-40 h-48 md:w-48 md:h-48 object-contain rounded-xl flex-shrink-0"
      />

      {/* Text */}
      <div className="flex flex-col justify-center text-center md:text-left">
        <h3 className="text-2xl md:text-3xl font-light text-[#AD88BE]">{name}</h3>
        <p className="mt-3 text-gray-700 font-extralight text-lg md:text-xl">{role}</p>
        {major && <p className="text-gray-500 font-light text-sm md:text-base italic mt-1">{major}</p>} {/* Added major */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-base md:text-lg text-[#AD88BE] hover:underline"
          >
            Learn More
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default TeamCard;


