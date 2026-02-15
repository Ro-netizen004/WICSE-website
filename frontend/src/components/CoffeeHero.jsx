import { motion } from "framer-motion";
const CoffeeHero = () => {
  return (

      <section className="bg-black text-white py-24 sm:py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* Coffee Image */}
          <motion.img
            src="/coffeeWithWiCSE/coffee-with-wicse.png"
            alt="Coffee with WiCSE"
            className="w-64 sm:w-72 md:w-80 lg:w-96 xl:w-[28rem] flex-shrink-0"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
          />

          {/* Text Content */}
          <div className="max-w-2xl text-center lg:text-left">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-8xl font-thin text-[#AD88BE] mb-6 leading-tight">
              Coffee with WiCSE
            </h1>

            <p className="text-gray-100 text-xl sm:text-2xl md:text-3xl font-light mb-6">
              Meaningful conversations. Real stories. Inspiring women in tech.
            </p>

            <p className="text-gray-400 text-sm sm:text-base mb-8">
              Coffee with WiCSE is an informal, one-time conversation program
              designed to connect women in STEM with industry professionals
              through relaxed, low-pressure coffee chats. Whether you're
              exploring career paths, seeking mentorship, or simply curious
              about someone’s journey, these conversations create a welcoming
              space to ask questions, share experiences, and build meaningful
              connections beyond the classroom.
            </p>

            <a
              href="https://outlook.office.com/book/CoffeeWithWiCSE@bookings.usf.edu/?ismsaljsauthenabled"
              target="_blank"
              className="inline-flex items-center justify-center rounded-full bg-[#AD88BE] hover:bg-[#B58CCC] text-white font-semibold px-10 py-4 text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Request a Coffee Chat
            </a>
          </div>
        </div>
      </section>

  )
}

export default CoffeeHero
