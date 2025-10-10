import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'nav-blur shadow-xl' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold font-display text-gradient-hero cursor-pointer hover:scale-105 transition-transform duration-300"
               onClick={() => scrollToSection('hero')}>
            Mahesh Yemineni
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-foreground hover:text-primary transition-all duration-300 font-medium group"
              >
                {item.label}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </button>
            ))}
            <Button 
              variant="outline" 
              size="sm" 
              className="ml-4 border-primary/20 hover:bg-primary hover:text-white transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-primary/10 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-border/50 pt-6 glass-effect rounded-2xl mx-4 mt-4">
            <div className="flex flex-col space-y-4 px-4">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-foreground hover:text-primary transition-colors duration-300 py-2 px-4 rounded-xl hover:bg-primary/5 font-medium fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                className="mt-4 btn-premium"
                onClick={() => scrollToSection('contact')}
              >
                Hire Me
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;