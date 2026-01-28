import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";


export default function CoffeeWithWiCSE() {
  const [mentors, setMentors] = useState([]);
  const topics = [
    "Resume & CV Review",
    "Interview Preparation",
    "Internships",
    "Early Career Advice",
    "Industry vs Academia",
    "Graduate School",
    "Career Transitions",
  ];


  useEffect(() => {
    fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vT8oRXg4dKYFkdvuhLij_JgfpiBLu2wxQ1wKvAsU-JquSMv0sCywPyKAoWjkMB90l0kmJrKLjiPsiB4/pub?output=csv"
    )
      .then((res) => res.text())
      .then((csvText) => {
        const rows = csvText.split("\n").slice(1);
        const data = rows
          .filter((row) => row.trim() !== "")
          .map((row) => {
            const [timestamp, fullName, preferredName, email, phone, schoolYear, bio] = row.split(",");
            return { timestamp, fullName, preferredName, email, phone, schoolYear, bio };
          });
        setMentors(data);
      })
      .catch((err) => console.error("Error fetching mentors:", err));
  }, []);

  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-black text-white py-24 sm:py-32 px-6 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.img
            src="/coffeeWithWiCSE/coffee-with-wicse.png"
            alt="Coffee with WiCSE"
            className="mx-auto w-40 sm:w-48 md:w-56"
            animate={{ y: [0, -10, 0] }}  // moves up 10px and back
            transition={{ 
              duration: 3, 
              ease: "easeInOut", 
              repeat: Infinity,   // keeps repeating
              repeatType: "loop"
            }}
          />
        <h1 className="animate-float text-5xl sm:text-5xl md:text-6xl font-thin text-[#AD88BE] mb-6">
            Coffee with WiCSE
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mb-8">
            Coffee with WiCSE is an informal, one-time conversation program designed to
            connect women in STEM through relaxed, low-pressure coffee chats. </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfnNjykDagZm8vDGp0xr1LbN4rxEHImZ0l8Vv0P0wOYR29ZtQ/viewform?usp=header"
            className="inline-flex items-center justify-center rounded-full bg-[#AD88BE] hover:bg-[#B58CCC] text-white font-semibold px-10 py-4 text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Request a Coffee Chat
          </a>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-thin text-[#AD88BE] mb-4">
            Meet Our Mentors
          </h2>
          <p className="text-gray-500 mb-12 text-lg">
            Our mentors are passionate students and professionals ready to share their experiences and guide you through your STEM journey.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {mentors.length === 0 ? (
              <p className="text-gray-500 col-span-full">Loading mentors...</p>
            ) : (
              mentors.map((mentor) => (
                <div
                  key={mentor.fullName}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 flex flex-col items-center text-center"
                >
                  <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-xl font-semibold text-gray-600 mb-4 overflow-hidden">
                    {mentor.image ? (
                      <img src={mentor.image} alt={mentor.fullName} className="w-full h-full object-cover"/>
                    ) : (
                      mentor.preferredName ? mentor.preferredName[0] : mentor.fullName[0]
                    )}
                  </div>
                  <h3 className="text-xl font-semibold">{mentor.fullName}</h3>
                  <p className="text-gray-500">{mentor.schoolYear}</p>
                  {mentor.bio && <p className="text-gray-400 text-sm mt-2">{mentor.bio}</p>}
                  {mentor.email && (
                    <a
                      href={`mailto:${mentor.email}`}
                      className="text-[#AD88BE] hover:underline text-sm mt-2"
                    >
                      Contact
                    </a>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Forms Access Section */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 bg-white animate-fadeInUp">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-thin text-[#AD88BE] mb-6">
            Access Your Form
          </h2>
          <p className="text-gray-500 mb-12 text-lg">
            Mentors and Mentees, please fill out your respective forms to join Coffee with WiCSE.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            {/* Mentor Form */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfL8egpHwi-Oo5R2fljrc81FlA2C3Kl9ozpQlDC_RvXiAmPPw/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#AD88BE] hover:bg-[#B58CCC] text-white font-semibold px-8 py-4 text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Mentor Form
            </a>

            {/* Mentee Form */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeXqonH4-XInq5wVGaNb9ADGfVl3vTvrkYgsZ-YNVkferwHRw/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#AD88BE] hover:bg-[#B58CCC] text-white font-semibold px-8 py-4 text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Mentee Form
            </a>
          </div>
        </div>
      </section>


      {/* Topics Section */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-thin text-[#AD88BE] mb-4">
            Possible Conversation Topics
          </h2>
          <p className="text-gray-500 mb-8 text-lg">
            You can explore these topics with our mentors or bring your own questions and experiences!
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {topics.map((topic) => (
              <span
                key={topic}
                className="px-5 py-2 sm:px-6 sm:py-3 rounded-full bg-[#F8F8F8] shadow text-[#AD88BE] font-medium text-sm sm:text-base hover:bg-[#AD88BE] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              >
                {topic}
              </span>
            ))}
          </div>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfnNjykDagZm8vDGp0xr1LbN4rxEHImZ0l8Vv0P0wOYR29ZtQ/viewform?usp=header"
            className="inline-block mt-12 rounded-full bg-[#AD88BE] hover:bg-[#B58CCC] text-white font-semibold px-10 py-4 text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Schedule Your Coffee Chat
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}






