"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // ปิดเมนูเวลาคลิก link เพื่อ UX ดีขึ้น
  const handleLinkClick = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  const services = [
    { name: "Marketing Online", href: "/services/marketing-online" },
    { name: "Marketing Offline", href: "/services/marketing-offline" },
    { name: "Event & Production", href: "/services/event-production" },
    { name: "Influencer Marketing", href: "/services/influencer-marketing" },
  ];

  return (
    <header className="bg-white text-[#FF3B30] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3" onClick={handleLinkClick}>
          <img src="/logo.jpeg" alt="BBY Media" className="h-12 w-auto rounded-md" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10 items-center font-semibold text-lg relative">
          <Link
            href="/"
            className="hover:text-[#FFC107] transition-colors duration-300"
            onClick={handleLinkClick}
          >
            หน้าแรก
          </Link>

          {/* Dropdown Services */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center space-x-1 hover:text-[#FFC107] focus:outline-none transition-colors duration-300 font-semibold"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
            >
              <span>บริการของเรา</span>
              <svg
                className={`w-4 h-4 text-[#FF3B30] transition-transform duration-300 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {servicesOpen && (
              <div
                onMouseLeave={() => setServicesOpen(false)} // ปิด dropdown ถ้า mouse ออก (optional)
                className="absolute left-0 top-full mt-2 bg-white text-[#FF3B30] rounded-none min-w-[260px] z-50"
                style={{ boxShadow: "none", border: "none" }}
              >
                {services.map(({ name, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="block px-4 py-2 text-sm hover:bg-[#FFC107] hover:text-white transition-colors duration-300"
                    onClick={handleLinkClick}
                  >
                    {name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/about"
            className="hover:text-[#FFC107] transition-colors duration-300"
            onClick={handleLinkClick}
          >
            เกี่ยวกับเรา
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#FFC107] transition-colors duration-300"
            onClick={handleLinkClick}
          >
            ติดต่อเรา
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden focus:outline-none text-[#FF3B30] hover:text-[#FFC107] transition-colors duration-300"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white text-[#FF3B30] shadow-inner border-t border-[#FFC107]">
          <ul className="flex flex-col space-y-3 px-6 pb-6 pt-4 text-lg font-semibold">
            <li>
              <Link
                href="/"
                className="block px-4 py-2 rounded hover:bg-[#FFC107] hover:text-white transition-colors duration-200"
                onClick={handleLinkClick}
              >
                หน้าแรก
              </Link>
            </li>

            {/* Mobile dropdown for services */}
            <li>
              <button
                type="button"
                className="w-full text-left px-4 py-2 rounded hover:bg-[#FFC107] hover:text-white flex justify-between items-center font-semibold transition-colors duration-200"
                onClick={() => setServicesOpen((open) => !open)}
                aria-expanded={servicesOpen}
              >
                <span>บริการของเรา</span>
                <svg
                  className={`w-5 h-5 text-[#FF3B30] transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <ul className="mt-2 pl-6 border-l-0">
                  {services.map(({ name, href }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="block px-4 py-2 text-sm rounded-none hover:bg-[#FFC107] hover:text-white transition-colors duration-300"
                        onClick={handleLinkClick}
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <Link
                href="/about"
                className="block px-4 py-2 rounded hover:bg-[#FFC107] hover:text-white transition-colors duration-200"
                onClick={handleLinkClick}
              >
                เกี่ยวกับเรา
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block px-4 py-2 rounded hover:bg-[#FFC107] hover:text-white transition-colors duration-200"
                onClick={handleLinkClick}
              >
                ติดต่อเรา
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
