import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, Settings, BookmarkIcon, Menu, X } from "lucide-react";

const HeaderQuran = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking a link (improved mobile UX)
  const handleLinkClick = () => {
    if (windowWidth < 768) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 w-full bg-[#F8FFF6] z-30">
      {/* Mobile Sidebar Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-transparent backdrop-blur-md z-40 md:hidden"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 p-1 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
            aria-label="Close menu"
          >
            <X size={24} className="text-gray-600" />
          </button>

          <div className="mt-10 space-y-6">
            <Link
              to="/doa"
              className="block text-teal-600 border-b-2 border-teal-500 pb-1 font-medium"
              onClick={handleLinkClick}
            >
              Doa - Doa
            </Link>
            <Link
              to="/jadwal"
              className="block text-gray-600 hover:text-teal-600 transition-colors"
              onClick={handleLinkClick}
            >
              Jadwal Imsakiyah
            </Link>
            <div className="pt-4 border-t border-gray-200">
              <button className="flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors w-full text-left">
                <BookmarkIcon size={20} />
                <span>Bookmarks</span>
              </button>
            </div>
            <div>
              <button className="flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors w-full text-left">
                <Settings size={20} />
                <span>Settings</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Header Content */}
      <div className="flex items-center justify-between p-3 sm:p-4 md:p-5 lg:p-6">
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          {/* Hamburger Menu Button (Mobile only) */}
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md hover:bg-gray-100 md:hidden focus:outline-none focus:ring-2 focus:ring-teal-500"
            aria-label="Open menu"
          >
            <Menu size={22} className="text-gray-600" />
          </button>

          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
            <img
              src="/MU-logo-brand.svg"
              alt="Logo"
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          <div className="relative flex-1 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl">
            <input
              type="text"
              placeholder="Search Here For Surah"
              className="w-full py-2 sm:py-2 md:py-3 px-4 sm:px-5 md:px-10 text-gray-700 text-sm md:text-base rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              aria-label="Search"
            />
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-teal-600 hover:text-teal-700 transition-colors"
              aria-label="Submit search"
            >
              <Search size={windowWidth < 640 ? 16 : 20} />
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          <nav className="flex gap-4 lg:gap-6">
            <Link
              to="/doa"
              className="text-teal-600 border-b-2 border-teal-500 pb-1 font-medium transition-colors"
            >
              Doa - Doa
            </Link>
            <Link
              to="/jadwal"
              className="text-gray-600 hover:text-teal-600 transition-colors"
            >
              Jadwal Imsakiyah
            </Link>
          </nav>
          <div className="flex gap-2 lg:gap-3">
            <button
              className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-teal-500 hover:bg-teal-600 flex items-center justify-center text-white transition-colors focus:outline-none focus:ring-2 focus:ring-teal-300"
              aria-label="Bookmarks"
            >
              <BookmarkIcon size={windowWidth < 1024 ? 16 : 20} />
            </button>
            <button
              className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-teal-500 hover:bg-teal-600 flex items-center justify-center text-white transition-colors focus:outline-none focus:ring-2 focus:ring-teal-300"
              aria-label="Settings"
            >
              <Settings size={windowWidth < 1024 ? 16 : 20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderQuran;
