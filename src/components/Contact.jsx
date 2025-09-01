function Contact() {
  return (
    <section
      id="contact"
      className="px-4 sm:py-16 sm:px-6 md:py-20 md:px-10 lg:py-24 lg:px-16 text-center bg-[#222] text-white"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl mb-5 text-indigo-600 font-bold">
        Get in Touch
      </h2>
      <p className="mb-8 text-gray-400 text-base sm:text-lg md:text-xl">
        Let’s discuss your project needs 🚀
      </p>

      <form className="max-w-lg mx-auto text-left bg-[#111] p-6 rounded-lg shadow-md space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 rounded-md bg-[#222] text-white border border-gray-600 focus:border-indigo-500 focus:ring focus:ring-indigo-500 outline-none"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 rounded-md bg-[#222] text-white border border-gray-600 focus:border-indigo-500 focus:ring focus:ring-indigo-500 outline-none"
          required
        />
        <input
          type="tel"
          placeholder="Your Phone Number"
          className="w-full px-4 py-2 rounded-md bg-[#222] text-white border border-gray-600 focus:border-indigo-500 focus:ring focus:ring-indigo-500 outline-none"
        />
        <textarea
          rows="4"
          placeholder="Your Message"
          className="w-full px-4 py-2 rounded-md bg-[#222] text-white border border-gray-600 focus:border-indigo-500 focus:ring focus:ring-indigo-500 outline-none"
          required
        ></textarea>

        <label className="flex items-center gap-2 text-gray-400 text-sm">
          <input type="checkbox" required className="accent-indigo-600" />
          I allow this website to store my data so they can respond to my query.
        </label>

        <button
          type="submit"
          className="w-full mt-4 px-6 py-3 bg-indigo-600 text-white rounded-md no-underline transition-colors duration-300 hover:bg-indigo-800"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
