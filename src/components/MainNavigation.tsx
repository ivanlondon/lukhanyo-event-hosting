import { useState } from "react";
import { Menu, X, Facebook, Instagram, Phone, Mail } from "lucide-react";

const MainNavigation = () => {
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
        <a href="#" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/272af5e9-d40b-45c1-a2a1-bb52c52f74ab.png"
            alt="Lukhanyo Signature"
            className="h-12" // Increased from h-8 to h-12
          />
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

        {/* Social Media Links - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://www.facebook.com/LukhanyonogqalaMC/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-primary transition-colors"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://www.instagram.com/lukhanyonogqala/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-primary transition-colors"
          >
            <Instagram size={20} />
          </a>
        </div>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden text-accent"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Menu */}
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
              {/* Social Media Links - Mobile */}
              <div className="flex gap-4 py-4">
                <a
                  href="https://www.facebook.com/LukhanyonogqalaMC/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-primary transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.instagram.com/lukhanyonogqala/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-primary transition-colors"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MainNavigation;