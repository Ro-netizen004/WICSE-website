import JingWangImage from "../assets/Jing_Wang_Advisor.png";
import PresidentImage from "../assets/president.png";
import marketingChair from "../assets/marketing-chair.png";
import marketingDirector1 from "../assets/marketing-director-shaiza.png"

const placeholderImage =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/..."; // truncated for readability

export const teams = {
  "Advisor": [
    {
      name: "Dr. Jing Wang",
      role: "Advisor",
      image: JingWangImage,
      link: "https://www.usf.edu/ai-cybersecurity-computing/people/faculty/jing-wang-2.aspx"
    }
  ],

  Executive: [
    {
      name: "Gabbriel McIntosh",
      role: "President",
      image: PresidentImage,
      link: "https://www.linkedin.com/in/gabbrielmcintosh/"
    },
    {
      name: "Gabriela Feliciano",
      role: "Vice-President (Internal)",
      image: placeholderImage,
      link: "https://www.usf.edu/ai-cybersecurity-computing/people/faculty/jing-wang-2.aspx"
    },
    {
      name: "Luiza Ferauche",
      role: "Vice-President (External)",
      image: placeholderImage,
      link: "https://www.usf.edu/ai-cybersecurity-computing/people/faculty/jing-wang-2.aspx"
    },
  ],

  Marketing: [
    { name: "Shubhi Verma", role: "Marketing Chair", image: marketingChair, link:"https://www.linkedin.com/in/shubhi-verma/" },
    { name: "Twinkle Markana", role: "Marketing Director", image: placeholderImage, link: "https://www.linkedin.com/in/twinklemarkana/" },
    { name: "Kruthika Rapolu", role: "Marketing Director", image: placeholderImage, link: "" },
    { name: "Shaiza Khan", role: "Marketing Director", image: marketingDirector1, link:"" },
  ],

  Tech: [
    { name: "Rodela Ghosh", role: "Web Developer", image: placeholderImage, link: "https://rodela-dev-site.onrender.com/" },
  ],

  Outreach: [
    { name: "Elen Mathew", role: "Outreach Chair", image: placeholderImage, link: "" },
    { name: "Esperanza Christian", role: "Community Outreach Director", image: placeholderImage, link: "" },
    { name: "Jaydah Barnett", role: "Professional Development Director", image: placeholderImage, link: "" },
  ],
};
