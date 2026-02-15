import { topics } from "../data/topics"
const Topics = () => {
  return (
      <section className="py-24 sm:py-32 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-thin text-[#AD88BE] mb-4">
            Possible Conversation Topics
          </h2>

          <p className="text-gray-500 mb-8 text-lg">
            You can explore these topics with our mentors or bring your own
            questions and experiences!
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {topics.map((topic) => (
              <span
                key={topic}
                className="px-5 py-2 sm:px-6 sm:py-3 rounded-full bg-[#F8F8F8] shadow text-[#AD88BE] font-medium text-sm sm:text-base hover:bg-[#AD88BE] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              >
                {topic}
              </span>
            ))}
          </div>

          <a
            href="https://outlook.office.com/book/CoffeeWithWiCSE@bookings.usf.edu/?ismsaljsauthenabled"
            className="inline-block mt-12 rounded-full bg-[#AD88BE] hover:bg-[#B58CCC] text-white font-semibold px-10 py-4 text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Schedule Your Coffee Chat
          </a>
        </div>
      </section>
  )
}

export default Topics
