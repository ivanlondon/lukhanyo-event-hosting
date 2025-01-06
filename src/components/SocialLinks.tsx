import { Facebook, Instagram } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="flex justify-center gap-6">
      <a
        href="https://www.facebook.com/LukhanyonogqalaMC/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:text-primary transition-colors"
      >
        <Facebook size={48} />
      </a>
      <a
        href="https://www.instagram.com/lukhanyonogqala/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:text-primary transition-colors"
      >
        <Instagram size={48} />
      </a>
      <a
        href="https://www.tiktok.com/@lukhanyonogqala"
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:text-primary transition-colors"
      >
        <svg 
          width="48" 
          height="48" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M16.6 4.2A5 5 0 0 1 20 8v.5a5 5 0 0 1-5 5v-2a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3h-.5" />
          <path d="M10 8a5 5 0 0 0-5 5v3a5 5 0 0 0 10 0v-8a3 3 0 0 1-2-2.8" />
        </svg>
      </a>
    </div>
  );
};

export default SocialLinks;