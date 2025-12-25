import { FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa";

const socialsData = [
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: "https://www.instagram.com/wicseusf/",
    size: "text-2xl",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/company/usf-wicse/posts/?feedView=all",
    size: "text-2xl",
  },
  {
    name: "Discord",
    icon: <FaDiscord />,
    url: "https://discord.com/invite/fGmvRhPuGf",
    size: "text-2xl",
  },
  {
    name: "BullsConnect",
    icon: null,
    url: "https://bullsconnect.usf.edu/WICSE/club_signup",
    size: "text-sm font-medium tracking-wide",
  },
];

const Socials = () => (
  <div className="flex justify-center items-center space-x-6 mt-8">
    {socialsData.map((social, index) => (
      <a
        key={index}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-white hover:text-[#956CA9] transition-colors ${social.size}`}
      >
        {social.icon ? social.icon : social.name}
      </a>
    ))}
  </div>
);

export default Socials;

