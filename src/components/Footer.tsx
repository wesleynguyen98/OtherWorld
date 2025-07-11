import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 w-full py-10">
      <div className="flex justify-between items-center w-full px-40">
        <div className="flex-shrink-0">
          <Link to="/home" className="flex-shrink-0">
            <img
              src="/coraline-yellow-logo.png"
              alt="Coraline Logo"
              className="w-[400px] h-auto object-contain"
            />
          </Link>
        </div>

        <div className="flex ml-auto space-x-6 text-white">
          <div className="flex items-center">
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Characters
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Lore
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Laika
                </a>
              </li>
            </ul>
          </div>

          <div className="border-l border-gray-300"></div>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Guest Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Order Tracking
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Return/Exchange
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shipping Info
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Account Info
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Store
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
