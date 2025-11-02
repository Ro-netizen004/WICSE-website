
import { FaUsers, FaHandshake, FaLaptopCode, FaUserFriends } from "react-icons/fa";



const Features = () => {
  const features = [
    {
      icon: <FaUsers />,
      title: "Community",
      description: "Join a supportive network of female students in CS and Engineering.",
    },
    {
      icon: <FaHandshake />,
      title: "Networking",
      description: "Build meaningful relationships with tech professionals and mentors.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Tech Workshops",
      description: "Gain hands-on experience with coding, AI, cybersecurity, and more.",
    },
    {
      icon: <FaUserFriends />,
      title: "Mentorship",
      description: "Build relationships with professionals and peers.",
    },
  ];

  return (
    <section className="py-10 bg-white px-20 sm:px-28 md:px-32 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-start max-h-[200px] max-w-[300px] mx-auto bg-white rounded-xl p-4 transition-transform duration-300 hover:scale-105"
          >
            <div className="text-[#AD88BE] text-7xl mb-4">{feature.icon}</div>
            <h2 className="text-black text-l sm:text-xl mb-2 font-thin">{feature.title.toUpperCase()}</h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-thin">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
