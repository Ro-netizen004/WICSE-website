import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { Link } from "react-router";
const Contact = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    
    <>
      <Navbar />
      <section className="relative py-24 px-6 sm:px-12 md:px-20 bg-black text-white min-h-screen">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-thin mb-6">
            Contact <span className="text-[#AD88BE]">Us</span>
          </h1>
          <p className="text-lg font-thin max-w-2xl mx-auto">
            Have questions, ideas, or want to collaborate? We’d love to connect with you and help you get involved in WiCSE.
          </p>
          <div className="mt-6 w-24 h-1 bg-[#AD88BE] mx-auto rounded-full"></div>
        </motion.div>

        {/* Contact Info + Form */}
        <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="bg-[#0b0b0b] p-8 rounded-2xl shadow-lg border border-[#AD88BE]/40"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-thin text-[#AD88BE] mb-6">Get in Touch</h2>
            <p className="text-gray-300 mb-6">
              Whether you’re looking to learn more about our events, join a program, or simply connect, reach out anytime — we’re here to help.
            </p>
            <ul className="text-gray-300 space-y-3">
              <li>
                <strong className="text-[#AD88BE]">Email:</strong> info@wicse.usf.edu
              </li>
              <li>
                <strong className="text-[#AD88BE]">Phone:</strong> +1 (555) 123-4567
              </li>
              <li>
                <strong className="text-[#AD88BE]">Address:</strong> University of South Florida, Tampa, FL
              </li>
            </ul>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="bg-[#0b0b0b] p-8 rounded-2xl shadow-lg border border-[#AD88BE]/40"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-thin text-[#AD88BE] mb-6">Send a Message</h2>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-[#AD88BE]"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-[#AD88BE]"
                placeholder="your.email@example.com"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-300 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-[#AD88BE]"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#AD88BE] hover:bg-[#9c6ab7] text-white font-semibold py-3 px-6 rounded-full transition-all duration-300"
            >
              Send Message
            </button>
          </motion.form>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <p className="text-lg mb-6 font-light">
            Want to meet us in person? Come to our next event and say hello!
          </p>
          <Link to="/events"
            className="inline-block bg-[#AD88BE] hover:bg-[#9c6ab7] text-white font-semibold py-3 px-10 rounded-full transition-all duration-300"
          >
            View Events
          </Link>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;

