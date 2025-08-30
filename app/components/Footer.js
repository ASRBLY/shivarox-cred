"use client";

export default function Footer() {
  return (
    <footer className="bg-surface text-gray-400 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div>
            <h3 className="text-2xl font-semibold text-white">ShivaroX</h3>
            <p className="mt-2 max-w-xs text-sm">
              Empowering you with cutting‑edge experiences that blend artistry
              and technology.
            </p>
          </div>
          <nav className="flex space-x-6 text-sm">
            <a href="/" className="hover:text-white">
              Home
            </a>
            <a href="/about" className="hover:text-white">
              About
            </a>
            <a href="/products" className="hover:text-white">
              Products
            </a>
            <a href="/contact" className="hover:text-white">
              Contact
            </a>
          </nav>
        </div>
        <div className="mt-8 text-center text-xs">
          &copy; {new Date().getFullYear()} ShivaroX. All rights reserved.
        </div>
      </div>
    </footer>
  );
}