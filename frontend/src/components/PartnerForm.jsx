import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const PartnerForm = () => {
  const form = useRef();

  const [sending, setSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setStatusMessage("");

    emailjs
      .sendForm(
        "service_q3ovabd",
        "template_y9uikpo",
        form.current,
        "Gc_FL3kCWkz1u7f72"
      )
      .then(
        () => {
          setStatusMessage("✅ Message sent successfully!");
          form.current.reset();
          setSending(false);
        },
        (error) => {
          console.error(error);
          setStatusMessage("❌ Oops! Something went wrong. Please try again.");
          setSending(false);
        }
      );
  };

  return (
    <section className="py-20 px-6 sm:px-12 md:px-20 bg-white text-black">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto bg-white rounded-2xl p-10"
      >
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-thin text-[#AD88BE] mb-2">
            Interested in partnering or sponsoring WiCSE@USF?
          </h2>
          <p className="text-gray-600 font-light">
            Complete the form below and our team will follow up.
          </p>
          <div className="mt-4 w-20 h-1 bg-[#AD88BE] mx-auto rounded-full"></div>
        </div>

        {/* Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-6 text-left">
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Organization Name
            </label>
            <input
              type="text"
              name="organization"
              required
              placeholder="Enter your organization name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#AD88BE]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contact Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter contact person's name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#AD88BE]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email address"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#AD88BE]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              required
              placeholder="Tell us how you'd like to collaborate"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#AD88BE]"
            ></textarea>
          </div>

          {/* Status Message */}
          {statusMessage && (
            <p className="text-center text-sm mt-2">
              {statusMessage}
            </p>
          )}

          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={sending}
              className="bg-[#AD88BE] text-white font-semibold py-2 px-8 rounded-full hover:bg-[#C4A0D6] disabled:opacity-50"
            >
              {sending ? "Sending..." : "Submit Inquiry"}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default PartnerForm;

