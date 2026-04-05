import { previousMentorsData } from "../data/prevmentors";

const PreviousMentors = () => {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-thin text-[#AD88BE] mb-4">
          Previous Mentors
        </h2>
        <p className="text-gray-500 mb-12 text-lg">
          A shoutout to the mentors who have guided and inspired our community.
        </p>

        {/* Grid container */}
        <div
          className={`grid gap-8 ${
            previousMentorsData.length === 1
              ? "grid-cols-1 justify-items-center"
              : "sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {previousMentorsData.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-white rounded-2xl shadow-lg px-96 py-9 flex flex-col items-center text-center"
            >
              {/* Photo */}
              <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-xl font-semibold text-gray-600 mb-4 overflow-hidden">
                {mentor.photo ? (
                  <img
                    src={mentor.photo}
                    alt={mentor.fullName}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  mentor.fullName?.charAt(0)
                )}
              </div>

              {/* Name & Role */}
              <h3 className="text-xl font-semibold">{mentor.fullName}</h3>
              <p className="text-gray-500 text-sm mb-2">{mentor.role}</p>

              {/* Major */}
              {mentor.major && (
                <p className="text-gray-400 text-sm mb-2">{mentor.major}</p>
              )}

              {/* Bio */}
              {mentor.bio && (
                <p className="text-gray-400 text-sm mb-2">{mentor.bio}</p>
              )}

              {/* Topics */}
              {mentor.topics?.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                  {mentor.topics.map((topic, i) => (
                    <span
                      key={i}
                      className="px-4 py-1 bg-[#F8F8F8] rounded-full text-[#AD88BE] text-xs font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviousMentors;