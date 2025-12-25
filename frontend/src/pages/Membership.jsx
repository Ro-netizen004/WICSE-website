import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaWpforms, FaUsers, FaLaptopCode } from "react-icons/fa";
import { useEffect } from "react";

const Membership = () => {
  // Scroll to top on page load
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const membershipSteps = [
    {
      id: 1,
      icon: <FaWpforms />,
      title: "Step 1",
      description:
        "Become a member on BullsConnect and follow us on Instagram to stay connected with WiCSE updates and opportunities. ",
      delay: 0.1,
    },
    {
      id: 2,
      icon: <FaUsers />,
      title: "Step 2",
      description:
        "Attend events to connect with the community, explore workshops, network with professionals, and discover career and leadership opportunities. ",
      delay: 0.3,
    },
    {
      id: 3,
      icon: <FaLaptopCode />,
      title: "Step 3",
      description:
        "Participate in programs, initiatives, or leadership roles to build skills and make an impact.",
      delay: 0.5,
    },
  ];

  return (
    <>
      <Navbar />
      <section className="relative py-20 px-6 sm:px-12 md:px-20 bg-black text-white min-h-screen">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-thin mb-6">
            Your <span className="text-[#AD88BE]">WiCSE</span> Journey Begins Here
          </h1>
          <p className="text-lg font-thin max-w-2xl mx-auto">
            Whether you’re just starting out or ready to lead, WiCSE is here to help you learn,
            connect, and make an impact in computing and engineering.
          </p>
          <div className="mt-6 w-24 h-1 bg-[#AD88BE] mx-auto rounded-full"></div>
        </motion.div>

        {/* Steps Section */}
        <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-20">
          {membershipSteps.map((step) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: step.delay }}
              className="p-8 rounded-2xl text-center border border-[#AD88BE]/40 hover:scale-105 transition-transform duration-300 bg-[#0b0b0b] shadow-lg"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-[#AD88BE] flex items-center justify-center shadow-lg">
                <div className="text-white text-8xl">
                  {step.icon}
                </div>
              </div>
              <h2 className="text-2xl font-thin text-[#AD88BE] mb-3">{step.title}</h2>
              <p className="text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <p className="text-lg mb-6 font-light">
            Ready to be part of our community? Join WiCSE today!
          </p>
          <a
            href="https://bullsconnect.usf.edu/WICSE/club_signup"
            className="inline-block bg-[#AD88BE] hover:bg-[#9c6ab7] text-white font-semibold py-3 px-10 rounded-full transition-all duration-300"
          >
            Join Now
          </a>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default Membership;





