import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    /* flex container for only the logo and the right nav bar */
    <nav className="flex items-center w-full">
      {/* Logo links back to /home */}
      <Link to="/home" className="flex-shrink-0">
        <img
          src="/coraline-logo.png"
          alt="Coraline Logo"
          className="w-[140px] py-2 h-auto object-contain"
        />
      </Link>

      {/* Nav items pushed to the right */}
      <ul className="flex ml-auto space-x-20 p-0 m-0 list-none items-center">
        {/* <li className="text-black cursor-pointer hover:bg-violet-600 transition px-8 py-3 rounded-xl">Lore</li> */}
        <li>
          <button className="bg-[#f5f0e6] hover:bg-amber-200 border-gray-300 text-center rounded-md px-4 py-2 whitespace-nowrap">
            Characters
          </button>
        </li>
        <li>
          <button className="bg-[#f5f0e6] hover:bg-amber-200 border-gray-300 text-center rounded-md px-4 py-2 whitespace-nowrap">
            Lore
          </button>
        </li>
        <Link to="/register">
          <li>
            <button className="bg-[#f5f0e6] hover:bg-amber-200 border-gray-300 text-center rounded-md px-4 py-2 whitespace-nowrap">
              Register
            </button>
          </li>
        </Link>
        <Link to="/login">
          <li>
            <button className="bg-[#f5f0e6] hover:bg-amber-200 border-gray-300 text-center rounded-md px-4 py-2 whitespace-nowrap">
              Sign In
            </button>
          </li>
        </Link>
      </ul>
    </nav>
  );
}
