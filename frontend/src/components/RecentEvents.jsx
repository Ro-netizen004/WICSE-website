import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const recentEvents = [
  { src: "/events/Halloween_Social.jpg", alt: "Halloween Social" },
  { src: "/events/E-Council Student Org Fair 1.jpg", alt: "E-Council Student Org Fair 1" },
  { src: "/events/E-Council Student Org Fair 2.jpg", alt: "E-Council Student Org Fair 2" },
  { src: "/events/JPMC.jpg", alt: "JPMC Session" },
  { src: "/events/JPMC-info-session.JPG", alt: "JPMC Info Session" },
  { src: "/events/Arthrex-info-session.jpg", alt: "Arthrex Info Session" },
  { src: "/events/Welcome_Back.jpg", alt: "Welcome Back WiCSE" },
  { src: "/events/Welcome_Back-2.jpg", alt: "Welcome Back WiCSE" },
];

const RecentEvents = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
    pauseOnHover: true,
    pauseOnFocus: true,

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

