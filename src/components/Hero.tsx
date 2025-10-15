import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 hero-gradient opacity-92"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl float animation-delay-1000"></div>
      <div className="absolute bottom-32 right-20 w-32 h-32 bg-white/3 rounded-full blur-2xl float animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-lg float animation-delay-3000"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <div className="fade-in">
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 mb-6">
                    Available for opportunities ✨
                  </span>
                </div>
                <h1 className="font-bold font-display mb-8 leading-tight">
                  <span className="text-2xl md:text-3xl text-white/90 block mb-2">Hi, I'm</span>
                  <span className="relative inline-block">
                    <span className="text-4xl md:text-6xl lg:text-5xl xl:text-6xl text-white drop-shadow-2xl">Mahesh Yemineni</span>
                    <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-transparent rounded-lg blur-lg opacity-50"></div>
                  </span>
                </h1>
                <p className="text-lg md:text-xl mb-10 text-white/95 leading-relaxed font-medium max-w-3xl">
                  I build data-driven solutions and interactive dashboards to solve real business problems using Python, SQL, Power BI, Tableau, and cloud platforms.
                </p>
                <div className="text-xl md:text-2xl lg:text-xl xl:text-2xl font-bold mb-12 space-y-3">
                  <div className="text-white/90">
                    <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Data Analytics</span>
                    <span className="text-2xl ml-2">📊</span>
                  </div>
                  <div className="text-white/90">
                    <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Salesforce</span>
                    <span className="text-2xl ml-2">☁️</span>
                  </div>
                  <div className="text-white/90">
                    <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Software Development</span>
                    <span className="text-2xl ml-2">💻</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Professional Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative scale-in">
                <div className="hero-photo overflow-hidden">
                  <img 
                    src={profilePhoto} 
                    alt="Mahesh Yemineni - Professional Headshot" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-white/10 to-transparent rounded-full blur-2xl opacity-30"></div>
              </div>
            </div>
          </div>
          
          <div className="slide-up flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mb-16 mt-12">
            <Button 
              size="lg" 
              className="btn-cta-secondary text-lg px-8 py-4 font-semibold min-w-[180px]"
              onClick={scrollToContact}
            >
              <Mail className="mr-3 h-5 w-5" />
              Let's Connect
            </Button>
            <Button 
              size="lg" 
              className="btn-cta-secondary text-lg px-8 py-4 font-semibold min-w-[180px]"
            >
              <Download className="mr-3 h-5 w-5" />
              Download Resume
            </Button>
          </div>
          
          {/* Enhanced Social Links */}
          <div className="slide-up flex flex-col space-y-4 justify-center lg:justify-start items-center lg:items-start mb-16">
            <div className="flex space-x-8">
              {[
                { icon: Github, href: "https://github.com/mahesh-yemineni", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/mahesh-yemineni-629627233/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:yeminenimahi@gmail.com", label: "Email" }
              ].map((social, index) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-4 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20 scale-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6 text-white group-hover:text-white transition-colors duration-200" />
                </a>
              ))}
            </div>
            <p className="text-white/80 text-sm">+91 7989023566</p>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-all duration-300 hover:scale-110 group cursor-pointer"
      >
        <div className="flex flex-col items-center space-y-2 pulse-glow p-4 rounded-full">
          <span className="text-sm font-medium opacity-80 group-hover:opacity-100">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center group-hover:border-white/60 transition-colors duration-300">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 group-hover:bg-white/80 transition-colors duration-300"></div>
          </div>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </div>
      </button>
    </section>
  );
};

export default Hero;