import { useEffect } from "react"

const Team = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      Team
    </div>
  )
}

export default Team
