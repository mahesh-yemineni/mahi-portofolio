import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects: Project[] = [
    // Project placeholders - titles and descriptions to be updated
    {
      id: 1,
      title: "Project Title 1",
      description: "Brief description of the project highlighting the problem solved, technologies used, and business impact. Quantifiable results placeholder.",
      category: "Data Analytics",
      technologies: ["Python", "SQL", "Power BI", "Excel"],
      githubLink: "Coming Soon",
      liveLink: "Coming Soon"
    },
    {
      id: 2,
      title: "Project Title 2",
      description: "Brief description of the project highlighting the problem solved, technologies used, and business impact. Quantifiable results placeholder.",
      category: "Data Analytics",
      technologies: ["Tableau", "SQL", "Python"],
      githubLink: "Coming Soon",
      liveLink: "Coming Soon"
    },
    {
      id: 3,
      title: "Project Title 3",
      description: "Brief description of the project highlighting the problem solved, technologies used, and business impact. Quantifiable results placeholder.",
      category: "Data Analytics",
      technologies: ["Power BI", "MySQL", "Excel"],
      githubLink: "Coming Soon",
      liveLink: "Coming Soon"
    },
    {
      id: 4,
      title: "Project Title 4",
      description: "Brief description of the project highlighting the problem solved, technologies used, and business impact. Quantifiable results placeholder.",
      category: "Data Analytics",
      technologies: ["Python", "Pandas", "Tableau"],
      githubLink: "Coming Soon",
      liveLink: "Coming Soon"
    },
    {
      id: 5,
      title: "Project Title 5",
      description: "Brief description of the project highlighting the problem solved, technologies used, and business impact. Quantifiable results placeholder.",
      category: "Data Analytics",
      technologies: ["SQL", "Power BI", "GCP"],
      githubLink: "Coming Soon",
      liveLink: "Coming Soon"
    },
    {
      id: 6,
      title: "Project Title 6",
      description: "Brief description of the project highlighting the problem solved, technologies used, and business impact. Quantifiable results placeholder.",
      category: "Salesforce",
      technologies: ["Salesforce", "Apex", "Lightning"],
      githubLink: "Coming Soon",
      liveLink: "Coming Soon"
    },
    {
      id: 7,
      title: "Project Title 7",
      description: "Brief description of the project highlighting the problem solved, technologies used, and business impact. Quantifiable results placeholder.",
      category: "Salesforce",
      technologies: ["Salesforce", "Process Builder", "Flows"],
      githubLink: "Coming Soon",
      liveLink: "Coming Soon"
    },
    {
      id: 8,
      title: "Project Title 8",
      description: "Brief description of the project highlighting the problem solved, technologies used, and business impact. Quantifiable results placeholder.",
      category: "Salesforce",
      technologies: ["Salesforce", "Service Cloud", "Lightning"],
      githubLink: "Coming Soon",
      liveLink: "Coming Soon"
    },
    {
      id: 9,
      title: "Project Title 9",
      description: "Brief description of the project highlighting the problem solved, technologies used, and business impact. Quantifiable results placeholder.",
      category: "Salesforce",
      technologies: ["Salesforce", "API Integration", "Apex"],
      githubLink: "Coming Soon",
      liveLink: "Coming Soon"
    },
    {
      id: 10,
      title: "Project Title 10",
      description: "Brief description of the project highlighting the problem solved, technologies used, and business impact. Quantifiable results placeholder.",
      category: "Salesforce",
      technologies: ["Salesforce", "Reports", "Dashboards"],
      githubLink: "Coming Soon",
      liveLink: "Coming Soon"
    },
    {
      id: 11,
      title: "Project Title 11",
      description: "Brief description of the project highlighting the problem solved, technologies used, and business impact. Quantifiable results placeholder.",
      category: "Software Development",
      technologies: ["Python", "Django", "PostgreSQL"],
      githubLink: "Coming Soon",
      liveLink: "Coming Soon"
    },
    {
      id: 12,
      title: "Project Title 12",
      description: "Brief description of the project highlighting the problem solved, technologies used, and business impact. Quantifiable results placeholder.",
      category: "Software Development",
      technologies: ["React", "Node.js", "MongoDB"],
      githubLink: "Coming Soon",
      liveLink: "Coming Soon"
    },
    {
      id: 13,
      title: "Project Title 13",
      description: "Brief description of the project highlighting the problem solved, technologies used, and business impact. Quantifiable results placeholder.",
      category: "Software Development",
      technologies: ["Python", "Flask", "MySQL"],
      githubLink: "Coming Soon",
      liveLink: "Coming Soon"
    },
    {
      id: 14,
      title: "Project Title 14",
      description: "Brief description of the project highlighting the problem solved, technologies used, and business impact. Quantifiable results placeholder.",
      category: "Software Development",
      technologies: ["Java", "Spring Boot", "PostgreSQL"],
      githubLink: "Coming Soon",
      liveLink: "Coming Soon"
    },
    {
      id: 15,
      title: "Project Title 15",
      description: "Brief description of the project highlighting the problem solved, technologies used, and business impact. Quantifiable results placeholder.",
      category: "Software Development",
      technologies: ["Python", "REST API", "Docker"],
      githubLink: "Coming Soon",
      liveLink: "Coming Soon"
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
                    className="flex-1"
                    disabled={project.githubLink === "Coming Soon"}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    {project.githubLink === "Coming Soon" ? "Coming Soon" : "Code"}
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1"
                    disabled={project.liveLink === "Coming Soon"}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {project.liveLink === "Coming Soon" ? "Coming Soon" : "Live Demo"}
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
