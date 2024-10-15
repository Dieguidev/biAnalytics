"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const Header = () => {
  const currentPath = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/home" className="flex items-center">
              <Image
                src="/logo.jpg"
                alt="BI Analytics Logo"
                width={50}
                height={50}
              />
              <span className="ml-2 text-3xl font-bold">BI Analytics</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/home"
              className={`${
                currentPath === "/home" ? "text-blue-700 font-bold" : ""
              } text-gray-700 hover:text-blue-500`}
            >
              Inicio
            </Link>
            <Link
              href="/services"
              className={`${
                currentPath === "/services" ? "text-blue-700 font-bold" : ""
              } text-gray-700 hover:text-blue-500`}
            >
              Servicios
            </Link>
            <Link
              href="/contact"
              className={`${
                currentPath === "/contact" ? "text-blue-700 font-bold" : ""
              } text-gray-700 hover:text-blue-500`}
            >
              Contacto
            </Link>
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-4 px-4 py-4">
            <Link
              href="/home"
              className={`${
                currentPath === "/home" ? "text-blue-700 font-bold" : ""
              } text-gray-700 hover:text-blue-500`}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`${
                currentPath === "/services" ? "text-blue-700 font-bold" : ""
              } text-gray-700 hover:text-blue-500`}
            >
              Servicios
            </Link>
            <Link
              href="/contact"
              className={`${
                currentPath === "/contact" ? "text-blue-700 font-bold" : ""
              } text-gray-700 hover:text-blue-500`}
            >
              Contacto
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
