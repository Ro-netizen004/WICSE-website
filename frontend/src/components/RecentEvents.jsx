import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const recentEvents = [
  { src: "/events/JPMC-info-session.JPG", alt: "JPMC Info Session" },
  { src: "/events/Arthrex-info-session.jpg", alt: "Arthrex Info Session" },
  { src: "https://wicse.cse.usf.edu/images/event2.jpg", alt: "Event 3" },
  { src: "/events/event4.jpg", alt: "Event 4" },
];

const RecentEvents = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section className="py-20 bg-gray-100 px-6 sm:px-12 md:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-thin text-[#AD88BE]">
          Recent Events
        </h2>
        <p className="text-gray-700 mt-4 text-base sm:text-lg font-thin">
          Take a look at our recent activities and workshops where our community comes together.
        </p>
      </div>

      <Slider {...settings}>
        {recentEvents.map((event, index) => (
          <div key={index} className="px-2">
            <img
              src={event.src}
              alt={event.alt}
              className="rounded-xl shadow-lg object-cover w-full h-64 sm:h-72 md:h-80"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default RecentEvents;
