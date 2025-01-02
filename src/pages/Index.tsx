import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Award, Briefcase, Calendar } from "lucide-react";

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal");
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="section pt-32 bg-gradient-to-b from-primary/10 to-white">
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div className="reveal">
            <img 
              src="/lovable-uploads/272af5e9-d40b-45c1-a2a1-bb52c52f74ab.png"
              alt="Lukhanyo Signature"
              className="w-48 mb-6"
            />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional MC & Event Host
            </h1>
            <p className="text-lg mb-8 text-gray-600">
              Creating memorable experiences through dynamic hosting and expert moderation
            </p>
            <a
              href="#contact"
              className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors inline-block"
            >
              Book Now
            </a>
          </div>
          <div className="reveal">
            <img
              src="/lovable-uploads/f6488eee-a480-4424-9533-1c2c9a24cfad.png"
              alt="Lukhanyo Nogqala"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-white">
        <div className="container">
          <div className="reveal max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Lukhanyo</h2>
            <p className="text-gray-600">
              Lukhanyo Nogqala is an experienced and dynamic Master of Ceremonies, event host, and business moderator with a passion for connecting audiences and creating memorable experiences. With a background in business development and a deep understanding of the entrepreneurial ecosystem, Lukhanyo brings professionalism, energy, and insight to every stage he steps on.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 reveal">
            Areas of Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Briefcase className="w-12 h-12 text-primary" />,
                title: "Corporate & Business Events",
                description: "Expert moderation for panel discussions, conferences, and networking events.",
              },
              {
                icon: <Award className="w-12 h-12 text-primary" />,
                title: "Entertainment & Lifestyle",
                description: "Professional hosting for awards shows, red carpet events, and cultural showcases.",
              },
              {
                icon: <Calendar className="w-12 h-12 text-primary" />,
                title: "Custom Event Solutions",
                description: "Tailored event scripts and flow to match your occasion's unique requirements.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="reveal bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 reveal">
            Career Highlights
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Gauteng Tourism Awards",
                role: "Host",
                description: "Successfully led this prestigious event celebrating excellence in tourism.",
              },
              {
                title: "Dream Chasers",
                role: "Presenter",
                description: "Captivated audiences as the host of this inspiring TV show.",
              },
              {
                title: "Africa Top 10",
                role: "Anchor",
                description: "Delivered compelling content on DStv (Cape Town TV).",
              },
              {
                title: "Business Moderator",
                role: "Expert",
                description: "Specialized in SMME development and enterprise supplier development.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="reveal bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-primary font-medium mb-4">{item.role}</p>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-accent">
        <div className="container text-center text-white">
          <div className="reveal max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Book Lukhanyo for Your Next Event
            </h2>
            <p className="mb-8">
              Let's make your event unforgettable. Contact Lukhanyo today to discuss your hosting and moderation needs.
            </p>
            <a
              href="mailto:contact@lukhanyo.com"
              className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors inline-block"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;