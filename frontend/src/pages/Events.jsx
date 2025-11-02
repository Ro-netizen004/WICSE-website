import { useEffect } from "react"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const events = [
  {
    title: "Women in Tech Workshop",
    date: "Nov 15, 2025",
    time: "2:00 PM - 4:00 PM",
    location: "USF Tampa Campus, Room 101",
    description: "Hands-on workshop introducing web development and career opportunities for women in tech.",
    link: "#",
  },
  {
    title: "AI & Cybersecurity Panel",
    date: "Dec 5, 2025",
    time: "3:00 PM - 5:00 PM",
    location: "Online (Zoom)",
    description: "Expert panel discussing AI, cybersecurity trends, and how women can lead in these fields.",
    link: "#",
  },
  {
    title: "Hackathon Kickoff",
    date: "Jan 10, 2026",
    time: "10:00 AM - 6:00 PM",
    location: "USF Tampa Campus, Innovation Lab",
    description: "Join our 24-hour hackathon to develop innovative solutions and showcase your skills.",
    link: "#",
  },
];

const Events = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
     <Navbar />
    <div className="bg-black min-h-screen text-white py-16 px-6 sm:px-12 md:px-20">
      <h1 className="text-4xl sm:text-5xl font-bold text-[#AD88BE] text-center mb-12">
        Upcoming Events
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event, index) => (
          <div
            key={index}
            className="border border-white p-6 sm:p-8 rounded-lg backdrop-blur-sm bg-black/30 transition hover:scale-105 hover:bg-black/50"
          >
            <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
            <p className="text-gray-300 text-sm mb-1">
              <span className="font-semibold text-white">Date: </span>{event.date}
            </p>
            <p className="text-gray-300 text-sm mb-1">
              <span className="font-semibold text-white">Time: </span>{event.time}
            </p>
            <p className="text-gray-300 text-sm mb-4">
              <span className="font-semibold text-white">Location: </span>{event.location}
            </p>
            <p className="text-gray-300 mb-6">{event.description}</p>
            <a
              href={event.link}
              className="inline-block bg-[#AD88BE] hover:bg-[#C4A0D6] text-black font-semibold py-2 px-4 rounded transition"
            >
              Register
            </a>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Events;

