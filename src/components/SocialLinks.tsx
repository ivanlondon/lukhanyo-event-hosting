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
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
        </svg>
      </a>
    </div>
  );
};

export default SocialLinks;