import { FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="py-5 px-4 bg-[#111] text-gray-400 text-sm sm:text-base flex flex-col sm:flex-row justify-between items-center gap-6">
      
      {/* Location */}
      <div className="text-center sm:text-left ml-10">
        <h1 className="font-semibold text-white text-xl">Location</h1>
        <p className=" text-white hover: cursor-pointer underline">Pune, Maharashtra</p>
      </div>

      <div className="text-center">
        <h1 className="font-semibold text-white text-xl">Reach out</h1>
        <a
          href="mailto:miteshrajput21011@gmail.com"
          className="text-white hover:underline"
        >
          miteshrajput21011@gmail.com
        </a>
      </div>

      <div className="text-center mr-10">
        <h1 className="font-semibold text-white text-xl">Connect</h1>
        <div className="flex justify-center gap-4 mt-1">
          <a
            href="https://www.linkedin.com/in/mitesh-wagh-mr1704"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 text-xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/mr_x.1704"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-400 text-xl"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
