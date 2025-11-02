import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Mission from "../components/Mission"
import RecentEvents from "../components/RecentEvents"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <RecentEvents />
      <Mission />
      <Footer />
    </div>
  )
}

export default Home
