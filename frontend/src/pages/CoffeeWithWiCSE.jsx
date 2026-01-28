import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

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
        const rows = csvText.split("\n").slice(1); // skip header row
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
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-black text-white py-20 sm:py-28 px-4 sm:px-6 animate-fadeInUp">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <img
            src="/coffeeWithWiCSE/coffee-with-wicse.png"
            alt="Coffee with WiCSE"
            className="mx-auto w-40 sm:w-48 md:w-56 transform transition-transform duration-500 hover:scale-105"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-thin text-[#AD88BE] mb-6">
            Coffee with WiCSE
          </h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Coffee with WiCSE is an informal, one-time conversation program designed to
            connect women in STEM through relaxed, low-pressure coffee chats.
          </p>
          <a
            href="/coffee-with-wicse/request"
            className="inline-flex items-center justify-center rounded-full bg-[#AD88BE] hover:bg-[#B58CCC] text-white font-semibold px-10 py-4 text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Request a Coffee Chat
          </a>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-gray-50 animate-fadeInUp">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-thin text-[#AD88BE] mb-10">
            Meet Our Mentors
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {mentors.length === 0 ? (
              <p className="text-gray-500 col-span-full">Loading mentors...</p>
            ) : (
              mentors.map((mentor) => (
                <div
                  key={mentor.fullName}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-xl font-semibold text-gray-600">
                      {mentor.preferredName ? mentor.preferredName[0] : mentor.fullName[0]}
                    </div>
                    <h3 className="text-xl font-semibold">{mentor.fullName}</h3>
                    <p className="text-gray-500">{mentor.schoolYear}</p>
                    {mentor.bio && <p className="text-gray-400 text-sm mt-2">{mentor.bio}</p>}
                    {mentor.email && (
                      <a
                        href={`mailto:${mentor.email}`}
                        className="text-[#AD88BE] hover:underline text-sm"
                      >
                        Contact
                      </a>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-gray-50 animate-fadeInUp">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-thin text-[#AD88BE] mb-10">
            Possible Conversation Topics
          </h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {topics.map((topic) => (
              <span
                key={topic}
                className="px-5 py-2 sm:px-6 sm:py-3 rounded-full bg-white shadow text-[#AD88BE] font-medium text-sm sm:text-base hover:bg-[#AD88BE] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}





