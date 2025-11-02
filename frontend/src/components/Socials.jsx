import { FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex justify-center space-x-6 mt-8">
      <a
        href="https://www.instagram.com/wicseusf/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#AD88BE] hover:text-[#956CA9] transition-colors text-2xl"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.linkedin.com/company/usf-wicse/posts/?feedView=all"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#AD88BE] hover:text-[#956CA9] transition-colors text-2xl"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#AD88BE] hover:text-[#956CA9] transition-colors text-2xl"
      >
        <FaTwitter />
      </a>
    </div>
  );
};

export default Socials;
