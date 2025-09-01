import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="flex justify-between items-center p-4 bg-[#111] text-white flex-wrap">
      {/* Left side: Name */}
      <div className="text-xl font-bold text-indigo-500">
        Mitesh Wagh
      </div>

      {/* Right side: Navigation */}
      <div className="flex gap-10">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-500 font-bold border-b-2 border-indigo-500 pb-1"
              : "hover:text-indigo-400 transition-colors"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-500 font-bold border-b-2 border-indigo-500 pb-1"
              : "hover:text-indigo-400 transition-colors"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-500 font-bold border-b-2 border-indigo-500 pb-1"
              : "hover:text-indigo-400 transition-colors"
          }
        >
          Projects
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-500 font-bold border-b-2 border-indigo-500 pb-1"
              : "hover:text-indigo-400 transition-colors"
          }
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
