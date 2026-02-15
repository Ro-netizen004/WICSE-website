
const MentorForm = () => {
  return (
      <section className="py-24 sm:py-32 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-thin text-[#AD88BE] mb-6">
            Access Your Form
          </h2>

          <p className="text-gray-500 mb-12 text-lg">
            Mentors and Mentees, please fill out your respective forms to join
            Coffee with WiCSE.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfL8egpHwi-Oo5R2fljrc81FlA2C3Kl9ozpQlDC_RvXiAmPPw/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#AD88BE] hover:bg-[#B58CCC] text-white font-semibold px-8 py-4 text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Mentor Form
            </a>

            <a
              href="https://outlook.office.com/book/CoffeeWithWiCSE@bookings.usf.edu/?ismsaljsauthenabled"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#AD88BE] hover:bg-[#B58CCC] text-white font-semibold px-8 py-4 text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Mentee Form
            </a>
          </div>
        </div>
      </section>
  )
}

export default MentorForm
