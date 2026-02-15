import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CoffeeHero from "../components/CoffeeHero";
import Topics from "../components/Topics";
import MentorForm from "../components/MentorForm";

// Supabase URL & public anon key
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY; // public key
const supabase = createClient(supabaseUrl, supabaseKey);

export default function CoffeeWithWiCSE() {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMentors() {
      try {
        const { data, error } = await supabase
          .from("mentors")
          .select("*")
          .order("fullName", { ascending: true });

        if (error) {
          console.error("Error fetching mentors:", error);
        } else {
          // Since photo is now a public URL, no transformation needed
          setMentors(data);
          console.log(data);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchMentors();
  }, []);

  return (
    <main className="bg-white">
      <Navbar />
      <CoffeeHero />

<<<<<<< Updated upstream
      {/* MENTORS SECTION */}
=======
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

      {/* What It Is / What It Is Not */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 bg-gray-50 animate-fadeInUp">
        <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2">
          {/* What it is */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-transform duration-300 hover:-translate-y-2">
            <h2 className="text-2xl font-semibold mb-6">What this program is</h2>
            <ul className="space-y-3 text-gray-700 text-base list-disc list-inside">
              <li>One-time, 30-minute coffee chats</li>
              <li>Informal and conversational</li>
              <li>Focused on experience sharing and guidance</li>
              <li>Open to students, interns, and professionals</li>
            </ul>
          </div>

          {/* What it is not */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-transform duration-300 hover:-translate-y-2">
            <h2 className="text-2xl font-semibold mb-6">What this program is not</h2>
            <ul className="space-y-3 text-gray-700 text-base list-disc list-inside">
              <li>Not a long-term mentorship program</li>
              <li>No recurring meetings</li>
              <li>No evaluations or reports</li>
              <li>No commitment beyond one conversation</li>
            </ul>
          </div>
        </div>
      </section>


      {/* Mentors Section */}
>>>>>>> Stashed changes
      <section className="py-24 sm:py-32 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-thin text-[#AD88BE] mb-4">
            Meet Our Mentors
          </h2>

          <p className="text-gray-500 mb-12 text-lg">
            Our mentors are passionate students and professionals ready to
            share their experiences and guide you through your STEM journey.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {loading ? (
              <p className="text-gray-500 col-span-full">Loading mentors...</p>
            ) : mentors.length === 0 ? (
              <p className="text-gray-500 col-span-full">No mentors found.</p>
            ) : (
              mentors.map((mentor) => (
                <div
                  key={mentor.id}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 flex flex-col items-center text-center"
                >
                  {/* PHOTO */}
                  <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-xl font-semibold text-gray-600 mb-4 overflow-hidden">
                    {mentor.photo ? (
                      <img
                        src={mentor.photo}
                        alt={mentor.fullName}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      mentor.fullName?.charAt(0)
                    )}
                  </div>

                  {/* NAME & ROLE */}
                  <h3 className="text-xl font-semibold">{mentor.fullName}</h3>
                  <p className="text-gray-500 mb-2">{mentor.schoolYear || mentor.role}</p>

                  {/* MAJOR */}
                  {mentor.major && <p className="text-gray-400 text-sm mb-2">{mentor.major}</p>}

                  {/* AVAILABILITY */}
                  {mentor.availability && (
                    <p className="text-gray-400 text-sm mb-2">
                      <strong>Availability:</strong> {mentor.availability}
                    </p>
                  )}

                  {/* SHORT BIO */}
                  {mentor.bio && (
                    <p className="text-gray-400 text-sm mb-2">{mentor.bio}</p>
                  )}

                  {/* TOPICS */}
                  {mentor.topics?.length > 0 && (
                    <div className="flex flex-wrap justify-center gap-2 mt-2">
                      {mentor.topics.map((topic, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-[#F8F8F8] rounded-full text-[#AD88BE] text-xs font-medium"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* CONTACT */}
                  <div className="flex flex-col gap-1 mt-3">
                    {mentor.email && (
                      <a
                        href={`mailto:${mentor.email}`}
                        className="text-[#AD88BE] hover:underline text-sm"
                      >
                        Contact
                      </a>
                    )}

                    {mentor.linkedin && (
                      <a
                        href={mentor.linkedin.startsWith("http") ? mentor.linkedin : `https://${mentor.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#AD88BE] hover:underline text-sm"
                      >
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <MentorForm />
      <Topics />
      <Footer />
    </main>
  );
}
