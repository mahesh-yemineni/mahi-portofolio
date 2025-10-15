import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects: Project[] = [
    // Data Analyst Projects
    {
      id: 1,
      title: "Retail Sales Dashboard",
      description: "Developed an interactive dashboard analyzing sales and inventory trends, uncovering customer buying patterns, and improving reporting efficiency by 25%.",
      category: "Data Analytics",
      technologies: ["Python", "SQL", "Power BI"]
    },
    {
      id: 2,
      title: "Marketing Campaign Effectiveness Analysis",
      description: "Conducted analysis of marketing campaigns, measuring ROI and conversion rates, optimizing strategies, and improving campaign efficiency by 12%.",
      category: "Data Analytics",
      technologies: ["Python", "SQL", "Power BI"]
    },
    {
      id: 3,
      title: "Customer Segmentation Analysis",
      description: "Executed customer segmentation using clustering algorithms, enabling targeted marketing campaigns and boosting engagement by 15%.",
      category: "Data Analytics",
      technologies: ["Python", "Azure"]
    },
    {
      id: 4,
      title: "Investment Risk Simulation",
      description: "Built a Monte Carlo simulation to forecast portfolio risk and optimize investment strategies, increasing forecast accuracy by 20%.",
      category: "Data Analytics",
      technologies: ["Python", "Monte Carlo Simulation"]
    },
    {
      id: 5,
      title: "Data Quality & Compliance Dashboard",
      description: "Created dashboards to monitor data quality and compliance KPIs, reducing reporting errors by 30% and improving regulatory adherence.",
      category: "Data Analytics",
      technologies: ["Tableau"]
    },
    // Software Development Projects
    {
      id: 6,
      title: "E-commerce Web Application",
      description: "Developed a full-stack e-commerce platform with product management, shopping cart, and order tracking functionality.",
      category: "Software Development",
      technologies: ["Django", "React", "MySQL"]
    },
    {
      id: 7,
      title: "Task Management System",
      description: "Built a web application for task creation, assignment, and tracking, improving team productivity and accountability.",
      category: "Software Development",
      technologies: ["Flask", "Python", "SQLite"]
    },
    {
      id: 8,
      title: "Portfolio Website with Dynamic Content",
      description: "Created a fully responsive, dynamic portfolio website showcasing projects, skills, and contact form integration.",
      category: "Software Development",
      technologies: ["React", "Tailwind"]
    },
    {
      id: 9,
      title: "Blogging Platform",
      description: "Developed a blogging platform with content management, comments, and user authentication for multiple authors.",
      category: "Software Development",
      technologies: ["Django", "PostgreSQL"]
    },
    {
      id: 10,
      title: "Real-Time Chat App",
      description: "Built a chat application supporting real-time messaging, online status, and group chat features.",
      category: "Software Development",
      technologies: ["Node.js", "Socket.io", "MongoDB"]
    },
    // Salesforce Projects
    {
      id: 11,
      title: "Salesforce CRM Automation",
      description: "Automated lead assignment, follow-ups, and workflow processes to increase sales team efficiency.",
      category: "Salesforce",
      technologies: ["Apex", "LWC", "Workflows"]
    },
    {
      id: 12,
      title: "Employee Performance Tracker",
      description: "Developed dashboards to track employee KPIs, identify skill gaps, and improve workforce planning.",
      category: "Salesforce",
      technologies: ["Salesforce Reports", "Dashboards"]
    },
    {
      id: 13,
      title: "Lead Management System",
      description: "Implemented a lead tracking system to monitor lead stages, conversions, and pipeline metrics.",
      category: "Salesforce",
      technologies: ["Salesforce Flows", "Apex"]
    },
    {
      id: 14,
      title: "Custom Salesforce Dashboard – KPI Monitoring",
      description: "Created custom dashboards for real-time KPI tracking, enabling data-driven decisions by management.",
      category: "Salesforce",
      technologies: ["KPI Monitoring"]
    },
    {
      id: 15,
      title: "Customer Feedback System",
      description: "Built an automated feedback collection and analysis system to improve customer experience.",
      category: "Salesforce",
      technologies: ["Salesforce Automation"]
    }
  ];

  const categories = ["All", "Data Analytics", "Salesforce", "Software Development"];
  
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getProjectCount = (category: string) => {
    return category === "All" 
      ? projects.length 
      : projects.filter(p => p.category === category).length;
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of 15 diverse projects spanning data analytics, Salesforce development, and software engineering
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 slide-up">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className="px-6 py-3 rounded-full font-medium transition-all duration-200"
              >
                {category} ({getProjectCount(category)})
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="project-card rounded-2xl p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="skill-tag px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 cursor-pointer"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 cursor-pointer"
                    onClick={(e) => e.preventDefault()}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Preview
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* No projects message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
