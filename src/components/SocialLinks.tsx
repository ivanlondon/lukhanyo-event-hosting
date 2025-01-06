const SocialLinks = () => {
  return (
    <div className="flex justify-center gap-6">
      <a
        href="https://www.facebook.com/LukhanyonogqalaMC/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity"
      >
        <img 
          src="/lovable-uploads/272af5e9-d40b-45c1-a2a1-bb52c52f74ab.png"
          alt="Facebook"
          className="h-12 w-auto"
        />
      </a>
      <a
        href="https://www.instagram.com/lukhanyonogqala/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity"
      >
        <img 
          src="/lovable-uploads/272af5e9-d40b-45c1-a2a1-bb52c52f74ab.png"
          alt="Instagram"
          className="h-12 w-auto"
        />
      </a>
      <a
        href="https://www.tiktok.com/@lukhanyonogqala"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity"
      >
        <img 
          src="/lovable-uploads/272af5e9-d40b-45c1-a2a1-bb52c52f74ab.png"
          alt="TikTok"
          className="h-12 w-auto"
        />
      </a>
    </div>
  );
};

export default SocialLinks;