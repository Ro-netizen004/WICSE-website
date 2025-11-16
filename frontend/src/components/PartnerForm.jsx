import { motion } from "framer-motion";

const PartnerForm = () => {
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
            Partner With Us
          </h2>
          <p className="text-gray-600 font-light">
            Collaborate with WiCSE@USF to support and uplift women in 
            computing and engineering.
          </p>
          <div className="mt-4 w-20 h-1 bg-[#AD88BE] mx-auto rounded-full"></div>
        </div>

        {/* Form */}
        <form
          action="#"
          method="POST"
          className="space-y-6 text-left"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Organization Name
            </label>
            <input
              type="text"
              placeholder="Enter your organization name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#AD88BE]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contact Name
            </label>
            <input
              type="text"
              placeholder="Enter contact person's name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#AD88BE]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#AD88BE]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Tell us how you'd like to collaborate"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#AD88BE]"
            ></textarea>
          </div>

          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-[#AD88BE] text-white font-semibold py-2 px-8 rounded-full transition duration-300 hover:bg-[#C4A0D6]"
            >
              Submit Inquiry
            </motion.button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default PartnerForm;
