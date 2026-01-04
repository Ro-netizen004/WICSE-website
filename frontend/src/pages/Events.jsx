import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const calendarId = import.meta.env.VITE_GOOGLE_CALENDAR_ID;
const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchEvents = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&timeMin=${new Date().toISOString()}&singleEvents=true&orderBy=startTime`
        );

        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();

        const mappedEvents = (data.items || []).map((event) => ({
          id: event.id,
          title: event.summary || "Untitled Event",
          date: new Date(
            event.start.dateTime || event.start.date
          ).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }),
          time: event.start.dateTime
            ? `${new Date(event.start.dateTime).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })} - ${new Date(event.end.dateTime).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}`
            : "All Day",
          location: event.location || "TBD",
          description: event.description || "No description available.",
          link: event.htmlLink || "#",
        }));

        setEvents(mappedEvents);
      } catch (err) {
        console.error("Failed to fetch events:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
      <Navbar />

      <div className="bg-black min-h-screen text-white py-12 px-6 sm:px-12 md:px-20">
        <h1 className="text-4xl sm:text-5xl font-thin text-[#AD88BE] text-center mb-12">
          Upcoming Events
        </h1>

        {loading ? (
          <p className="text-center text-gray-400 text-lg">
            Loading events...
          </p>
        ) : error ? (
          <p className="text-center text-red-400 text-lg">
            Unable to load events at the moment.
          </p>
        ) : events.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <div
                key={event.id}
                className="border border-white p-6 sm:p-8 rounded-lg backdrop-blur-sm bg-black/30 transition hover:scale-105 hover:bg-black/50"
              >
                <h2 className="text-2xl font-semibold mb-2">
                  {event.title}
                </h2>

                <p className="text-gray-300 text-sm mb-1">
                  <span className="font-semibold text-white">Date: </span>
                  {event.date}
                </p>

                <p className="text-gray-300 text-sm mb-1">
                  <span className="font-semibold text-white">Time: </span>
                  {event.time}
                </p>

                <p className="text-gray-300 text-sm mb-4">
                  <span className="font-semibold text-white">
                    Location:{" "}
                  </span>
                  {event.location}
                </p>

                <p className="text-gray-300 mb-6">
                  {event.description}
                </p>

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
        ) : (
          <div className="flex flex-col items-center justify-center mt-16 space-y-4">
          <img
            src="no_events.jpg"
            alt="No Events"
            className="w-32 h-32 sm:w-48 sm:h-48 object-contain"
          />

          <p className="text-center text-gray-400 text-lg">
            No upcoming events right now — stay tuned for exciting WiCSE events soon 
          </p>
        </div>

        )}
      </div>

      <Footer />
    </>
  );
};

export default Events;
