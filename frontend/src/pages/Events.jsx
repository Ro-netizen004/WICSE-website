import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const calendarId = import.meta.env.VITE_GOOGLE_CALENDAR_ID;
const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchEvents = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&timeMin=${new Date().toISOString()}&singleEvents=true&orderBy=startTime`
        );
        const data = await res.json();
        // Map Google events to match your current structure
        const mappedEvents = data.items.map((event) => ({
          title: event.summary,
          date: new Date(event.start.dateTime || event.start.date).toLocaleDateString(
            "en-US",
            { month: "short", day: "numeric", year: "numeric" }
          ),
          time: event.start.dateTime
            ? `${new Date(event.start.dateTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} - ${new Date(event.end.dateTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`
            : "All Day",
          location: event.location || "TBD",
          description: event.description || "No description available.",
          link: event.htmlLink || "#",
        }));
        setEvents(mappedEvents);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      }
    };

    fetchEvents();
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
                target="_blank"
                rel="noopener noreferrer"
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
