import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CoffeeHero from "../components/CoffeeHero";
import Topics from "../components/Topics";
import PreviousMentors from "../components/PreviousMentors";
import MentorCard from "../components/MentorCard";
import { mentorsData } from "../data/mentors";

export const BOOKING_LINK =
  "https://bookings.cloud.microsoft/owa/calendar/CoffeewithWiCSE1@bookings.usf.edu/bookings/?ismsaljsauthenabled";

export default function CoffeeWithWiCSE() {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMajor, setSelectedMajor] = useState("All");

  useEffect(() => {
    setMentors(mentorsData);
    setLoading(false);
  }, []);

  // Get majors for the dropdown
  const majors = useMemo(() => {
    const uniqueMajors = mentors
      .map((mentor) => mentor.major)
      .filter(Boolean);

    return ["All", ...new Set(uniqueMajors)];
  }, [mentors]);

  // Filter mentors based on major
  const filteredMentors = useMemo(() => {
    if (selectedMajor === "All") {
      return mentors;
    }

    return mentors.filter((mentor) => mentor.major === selectedMajor);
  }, [mentors, selectedMajor]);

  return (
    <main className="bg-white">
      <Navbar />

      <CoffeeHero bookingLink={BOOKING_LINK} />

      {/* HOW IT WORKS */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-thin text-[#AD88BE] mb-4">
            How It Works
            </h2>

            <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-12">
            Connect with a mentor, have a meaningful conversation, and learn
            from real experiences in STEM.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* STEP 1 */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
                <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-[#AD88BE] text-white flex items-center justify-center text-lg font-medium">
                1
                </div>

                <h3 className="text-xl font-semibold mb-3">
                Choose a Mentor
                </h3>

                <p className="text-gray-500">
                Browse our mentors and find someone whose experience,
                career path, or interests match what you'd like to learn.
                </p>
            </div>

            {/* STEP 2 */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
                <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-[#AD88BE] text-white flex items-center justify-center text-lg font-medium">
                2
                </div>

                <h3 className="text-xl font-semibold mb-3">
                Book a Coffee Chat
                </h3>

                <p className="text-gray-500">
                Select a convenient time through Microsoft Bookings
                and schedule your one-time coffee chat.
                </p>
            </div>

            {/* STEP 3 */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
                <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-[#AD88BE] text-white flex items-center justify-center text-lg font-medium">
                3
                </div>

                <h3 className="text-xl font-semibold mb-3">
                Start the Conversation
                </h3>

                <p className="text-gray-500">
                Come with questions, curiosity, or your own experiences
                and enjoy a relaxed conversation with your mentor.
                </p>
            </div>
            </div>
        </div>
        </section>

      {/* MENTORS SECTION */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-thin text-[#AD88BE] mb-4">
            Meet Our Mentors
          </h2>

          <p className="text-gray-500 mb-8 text-lg">
            Our mentors are passionate professionals ready to share their
            experiences and guide you through your STEM journey.
          </p>

          {/* MAJOR FILTER */}
          <div className="flex justify-center mb-12">
            <div className="relative group">
                <label
                    htmlFor="major-filter"
                    className="block text-sm text-gray-500 mb-2"
                >
                    Find a Mentor by Major
                </label>

                <select
                    id="major-filter"
                    value={selectedMajor}
                    onChange={(e) => setSelectedMajor(e.target.value)}
                    className="appearance-none bg-white text-gray-700 border border-[#AD88BE] rounded-full px-6 py-3 pr-12 min-w-[200px] shadow-sm font-light tracking-wide cursor-pointer hover:bg-[#AD88BE] hover:text-white hover:border-white focus:outline-none focus:ring-2 focus:ring-[#AD88BE] focus:border-transparent transition duration-200"
                >
                    {majors.map((major) => (
                    <option key={major} value={major}>
                        {major === "All" ? "All Majors" : major}
                    </option>
                    ))}
                </select>

                <div className="pointer-events-none absolute right-4 bottom-3.5 text-[#AD88BE] group-hover:text-white transition duration-200">
                    ▼
                </div>
                </div>
          </div>

          {/* MENTOR GRID */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {loading ? (
              <p className="text-gray-500 col-span-full">
                Loading mentors...
              </p>
            ) : filteredMentors.length === 0 ? (
              <p className="text-gray-500 col-span-full">
                No mentors found for this major.
              </p>
            ) : (
              filteredMentors.map((mentor) => (
                <MentorCard key={mentor.id} mentor={mentor} />
              ))
            )}
          </div>
        </div>
      </section>

      <Topics bookingLink={BOOKING_LINK} />

      <PreviousMentors />

      <Footer />
    </main>
  );
}