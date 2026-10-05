import { useState } from "react";

const MentorCard = ({ mentor }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 flex flex-col items-center text-center">
      {/* PHOTO */}
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

      {/* NAME */}
      <h3 className="text-xl font-semibold">
        {mentor.fullName}
      </h3>

      {/* ROLE */}
      <p className="text-gray-500 mb-2">
        {mentor.schoolYear || mentor.role}
      </p>

      {/* MAJOR */}
      {mentor.major && (
        <p className="text-gray-400 text-sm mb-2">
          {mentor.major}
        </p>
      )}

      {/* AVAILABILITY */}
      {mentor.availability && (
        <p className="text-gray-400 text-sm mb-2">
          <strong>Availability:</strong> {mentor.availability}
        </p>
      )}

      {/* BIO */}
      {mentor.bio && (
        <div className="text-gray-400 text-sm mb-2">
          <p className={expanded ? "" : "line-clamp-3"}>
            {mentor.bio}
          </p>

          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="text-[#AD88BE] hover:underline mt-1 font-medium"
          >
            {expanded ? "Show Less" : "Read More"}
          </button>
        </div>
      )}

      {/* TOPICS */}
      {mentor.topics?.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {mentor.topics.map((topic, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-[#F8F8F8] rounded-full text-[#AD88BE] text-xs font-medium"
            >
              {topic}
            </span>
          ))}
        </div>
      )}

      {/* LINKEDIN */}
      {mentor.linkedin && (
        <div className="flex flex-col gap-1 mt-3">
          <a
            href={
              mentor.linkedin.startsWith("http")
                ? mentor.linkedin
                : `https://${mentor.linkedin}`
            }
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#AD88BE] hover:underline text-sm"
          >
            LinkedIn
          </a>
        </div>
      )}
    </div>
  );
};

export default MentorCard;