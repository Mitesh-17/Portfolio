function Projects() {
  return (
    <section id="projects" className="py-16 text-center flex flex-col justify-center bg-[#222] text-white h-[100vh]">

      <h2 className="text-3xl mb-8 text-indigo-600 font-bold">Projects</h2>
      <div className="flex justify-center gap-5 flex-wrap">
        <div className="bg-[#222] p-5 rounded-lg w-64 transition-transform duration-300 hover:scale-105 hover:bg-[#333] shadow-md">
          <h3 className="mb-2 text-indigo-600 text-xl font-semibold">
            Project 1
          </h3>
          <p>Stock Market Equity System</p>
        </div>

        <div className="bg-[#222] p-5 rounded-lg w-64 transition-transform duration-300 hover:scale-105 hover:bg-[#333] shadow-md">
          <h3 className="mb-2 text-indigo-600 text-xl font-semibold">
            Project 2
          </h3>
          <p>Vehicel Rental System</p>
        </div>

        <div className="bg-[#222] p-5 rounded-lg w-64 transition-transform duration-300 hover:scale-105 hover:bg-[#333] shadow-md">
          <h3 className="mb-2 text-indigo-600 text-xl font-semibold">
            Project 3
          </h3>
          <p>A portfolio website with React.js</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
