import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#details" },
    { label: "Outcomes", href: "#outcomes" },
    { label: "FAQ", href: "#faq" },
    { label: "Register", href: "#register" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${ scrolled ? "bg-[#0D0A1F]/90 backdrop-blur-md border-b border-[#2A2250]" : "bg-transparent" }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg btn-primary flex items-center justify-center">
              <Zap size={16} className="text-white" />
            </div>
            <span className="text-lg text-white tracking-tight" style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900 }}>
              Kid<span className="gradient-text">rove</span>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
            <a href="#register" className="btn-primary text-white text-sm font-semibold px-5 py-2 rounded-full">
              Enroll Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-400 hover:text-white" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#13102B] border-t border-[#2A2250] px-4 pt-4 pb-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white text-sm font-medium py-1"
            >
              {link.label}
            </a>
          ))}
          <a href="#register" onClick={() => setIsOpen(false)} className="btn-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center mt-2">
            Enroll Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;