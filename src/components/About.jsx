function About() {
  return (
    <section
      id="about"
      className="py-12 px-4 sm:py-16 sm:px-6 md:py-20 md:px-10 lg:py-24 lg:px-16 bg-[#222] text-white text-center h-[100vh] flex flex-col justify-center"
    >
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl mb-5 text-indigo-600 font-bold">
        About Me
      </h2>

      {/* Paragraph */}
      <p className="max-w-[700px] mx-auto leading-relaxed text-gray-300 text-base sm:text-lg md:text-xl mb-8">
        I am a web developer with a passion for creating beautiful and
        functional websites. Skilled in React, JavaScript, and modern web
        technologies. I love solving problems and learning new things every day.
      </p>

      <a
        href="/resume.pdf"
        download="resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-2xl shadow-lg transition duration-300"
      >
        Download Resume
      </a>

    </section>
  );
}

export default About;
