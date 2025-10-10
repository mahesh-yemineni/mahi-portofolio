import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/mahesh-yemineni",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mahesh-yemineni-629627233/",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:yeminenimahi@gmail.com",
      label: "Email"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Mahesh Yemineni</h3>
              <p className="text-white/80 leading-relaxed">
                Passionate about building impactful solutions in Data Analytics, 
                Salesforce, and Software Development.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-white/80 hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4 mb-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
              <p className="text-white/80 text-sm">
                yeminenimahi@gmail.com<br />
                +91 7989023566
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center text-white/80 mb-4 md:mb-0">
                <span>Made with</span>
                <Heart className="h-4 w-4 mx-2 text-red-400" />
                <span>by Mahesh Yemineni © {currentYear}</span>
              </div>
              
              <button
                onClick={scrollToTop}
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                Back to top ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;