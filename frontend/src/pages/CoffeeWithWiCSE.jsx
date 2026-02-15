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

      {/* MENTORS SECTION */}
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
