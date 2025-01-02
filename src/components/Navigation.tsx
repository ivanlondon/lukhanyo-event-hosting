import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 py-4 px-6 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-heading font-bold text-accent">
          Lukhanyo Nogqala
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-accent hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Navigation */}
        <button
          className="md:hidden text-accent"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
            <div className="flex flex-col p-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="py-2 text-accent hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;