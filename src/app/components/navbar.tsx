// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isExperiencesOpen, setIsExperiencesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = () => {
      setIsExperiencesOpen(false);
      setIsMobileMenuOpen(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Merch", href: "/merch" },
    { name: "Winners", href: "/winners" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-black text-white">
              Rockat<span className="text-red-500">Media</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition ${
                  pathname === item.href
                    ? "text-red-500"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Experiences Dropdown */}
            <div className="relative group">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExperiencesOpen(!isExperiencesOpen);
                }}
                className={`flex items-center text-sm font-medium space-x-1 transition ${
                  pathname.startsWith("/experiences")
                    ? "text-red-500"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <span>Experiences</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-2 z-50 border border-gray-700 ${
                  isExperiencesOpen ? "block" : "hidden"
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <Link
                  href="/experiences/sweepstakes"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Sweepstakes
                </Link>
                <Link
                  href="/experiences/giveaway"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Giveaway
                </Link>
              </div>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMobileMenuOpen(!isMobileMenuOpen);
              setIsExperiencesOpen(false);
            }}
            className="md:hidden text-gray-300 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium py-2 ${
                    pathname === item.href
                      ? "text-red-500"
                      : "text-gray-300"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Experiences Accordion */}
              <div className="border-t border-gray-800 pt-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsExperiencesOpen(!isExperiencesOpen);
                  }}
                  className="flex justify-between items-center w-full text-sm font-medium text-gray-300"
                >
                  <span>Experiences</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      isExperiencesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isExperiencesOpen && (
                  <div className="mt-2 space-y-2 pl-4">
                    <Link
                      href="/experiences/sweepstakes"
                      className="block text-sm text-gray-400 hover:text-white"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Sweepstakes
                    </Link>
                    <Link
                      href="/experiences/giveaway"
                      className="block text-sm text-gray-400 hover:text-white"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Giveaway
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}