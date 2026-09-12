import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const recentEvents = [
  { src: "/events/WelcomeBack_Social.jpg", alt: "Welcome Back Social" },
  { src: "/events/Welcome_BackSocialBoard.jpg", alt: "Welcome Back Social Board" },
  { src: "/events/WelcomeBack_SocialAttendees1.jpg", alt: "Welcome Back Attendees" },
  { src: "/events/GitHub_Workshop2.jpg", alt: "GitHub Workshop" },
  { src: "/events/GitHub_Attendees.jpg", alt: "GitHub Workshop Attendees" },
  { src: "/events/GitHub_Workshop.jpg", alt: "GitHub Workshop" },
  { src: "/events/YDTD_group.jpg", alt: "You Do The Dishes Social Group Pic" },
  { src: "/events/YDTD_ceramics.jpg", alt: "You Do The Dishes Social Ceramics" },
  { src: "/events/YDTD_Wall.jpg", alt: "YDTD Wall"},
];

const RecentEvents = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    arrows: false,
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-gray-100 px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-thin text-[#AD88BE]">
          Recent Events
        </h2>
        <p className="text-gray-700 mt-3 text-sm sm:text-base md:text-lg font-thin">
          Take a look at our recent activities and workshops where our community comes together.
        </p>
      </div>

      <Slider {...settings} className="max-w-7xl mx-auto">
        {recentEvents.map((event, index) => (
          <div key={index} className="px-3">
            <div className="overflow-hidden rounded-xl shadow-lg aspect-[4/3]">
              <img
                src={event.src}
                alt={event.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default RecentEvents;




