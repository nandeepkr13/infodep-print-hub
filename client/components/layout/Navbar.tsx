export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">

      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-8">

        {/* Logo */}

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-xl bg-blue-700 flex items-center justify-center text-white font-bold text-xl">
            I
          </div>

          <div>

            <h1 className="text-2xl font-bold text-blue-700">
              Infodep Print Hub
            </h1>

            <p className="text-xs text-gray-500">
              Professional Printing Solution
            </p>

          </div>

        </div>

        {/* Menu */}

        <nav>

          <ul className="flex gap-8 font-medium">

            <li className="cursor-pointer hover:text-blue-700 transition">
              Home
            </li>

            <li className="cursor-pointer hover:text-blue-700 transition">
              Services
            </li>

            <li className="cursor-pointer hover:text-blue-700 transition">
              Pricing
            </li>

            <li className="cursor-pointer hover:text-blue-700 transition">
              About
            </li>

            <li className="cursor-pointer hover:text-blue-700 transition">
              Contact
            </li>

          </ul>

        </nav>

        {/* Login Button */}

        <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg">
          Login
        </button>

      </div>

    </header>
  );
}