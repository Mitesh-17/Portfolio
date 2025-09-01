import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      id="home"
      className="h-[100vh] flex flex-col justify-center items-center text-center bg-[#222] text-white px-4"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
        Hi, I'm <span className="text-indigo-600">Mitesh</span>
      </h2>

      <p className="mt-4 mb-6 text-lg sm:text-xl md:text-2xl text-gray-400">
        A Passionate{" "}
        <span className="text-indigo-600 font-bold">
          <Typewriter
            words={[
              "MERN Stack Developer",
              "React Developer",
              "Full Stack Developer",
              "Problem Solver",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </p>

      <Link
        to="/projects"
        className="mt-5 px-6 py-3 text-white rounded-2xl font-semibold no-underline bg-indigo-600 hover:bg-indigo-700 shadow-lg transition duration-300"
      >
        View My Work
      </Link>
    </section>
  );
}

export default Hero;
