import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Mission from "../components/Mission"
import RecentEvents from "../components/RecentEvents"
import EventsSection from "../components/EventsSection"
import Footer from "../components/Footer"
import { useEffect } from "react"

const Home = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <RecentEvents />
      <EventsSection />
      <Mission />
      <Footer />
    </div>
  )
}

export default Home
