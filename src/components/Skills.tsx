import SkillBar from "./SkillBar";
import SkillBadge from "./SkillBadge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Scripting",
      icon: "💻",
      description: "Core programming languages and tools",
      skills: [
        { name: "Python", level: 90, isPremium: true },
        { name: "SQL", level: 92, isPremium: true },
        { name: "Java", level: 80 },
        { name: "React", level: 78 },
        { name: "Excel", level: 88 }
      ]
    },
    {
      title: "Data Visualization & BI Tools",
      icon: "📊",
      description: "Creating impactful visual insights",
      skills: [
        { name: "Power BI", level: 88, isPremium: true },
        { name: "Tableau", level: 85 },
        { name: "Matplotlib", level: 80 },
        { name: "Seaborn", level: 78 },
        { name: "Streamlit", level: 75 }
      ]
    },
    {
      title: "Database & Cloud Platforms",
      icon: "☁️",
      description: "Cloud and database management",
      skills: [
        { name: "MySQL/PostgreSQL", level: 85 },
        { name: "Google Cloud Platform", level: 80 }
      ]
    },
    {
      title: "Data Analysis & Modeling",
      icon: "📈",
      description: "Analytics and data methodology",
      skills: [
        { name: "Data Cleaning", level: 88 },
        { name: "Statistical Analysis", level: 82 },
        { name: "Data Structures", level: 80 },
        { name: "Data Storytelling", level: 88 }
      ]
    },
    {
      title: "Software Development",
      icon: "🛠️",
      description: "Full-stack development skills",
      skills: [
        { name: "Django", level: 80 },
        { name: "Flask", level: 78 },
        { name: "REST API", level: 82 },
        { name: "HTML/CSS/JS", level: 85 }
      ]
    },
    {
      title: "Salesforce & CRM",
      icon: "🌐",
      description: "Salesforce development expertise",
      skills: [
        { name: "Apex", level: 80 },
        { name: "LWC", level: 78 },
        { name: "Workflow Automation", level: 85 },
        { name: "Dashboards", level: 88 }
      ]
    },
    {
      title: "Professional Skills",
      icon: "🎯",
      description: "Methodology and soft skills",
      skills: [
        { name: "Agile Methodology", level: 85 },
        { name: "Design Thinking", level: 78 }
      ]
    }
  ];

  const topSkills = [
    { name: "Python", level: "expert", icon: "🐍" },
    { name: "SQL", level: "expert", icon: "🗃️" },
    { name: "Power BI", level: "expert", icon: "📊" },
    { name: "Tableau", level: "advanced", icon: "📉" },
    { name: "Excel", level: "expert", icon: "📗" },
    { name: "Java", level: "advanced", icon: "☕" },
    { name: "React", level: "advanced", icon: "⚛️" },
    { name: "GCP", level: "advanced", icon: "☁️" },
    { name: "MySQL", level: "advanced", icon: "💾" },
    { name: "Salesforce", level: "advanced", icon: "🌐" }
  ];

  return (
    <section id="skills" className="py-24 section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 fade-in">
            <h2 className="text-5xl md:text-6xl font-bold font-display mb-8 text-gradient">
              Skills & Expertise
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Domain-relevant technical skills focused on data analytics, visualization, and cloud platforms
            </p>
          </div>

          {/* Top Skills Badges */}
          <div className="mb-20 slide-up">
            <h3 className="text-2xl font-bold font-display text-center mb-12 text-foreground">
              Core Competencies
            </h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {topSkills.map((skill, index) => (
                <SkillBadge
                  key={skill.name}
                  name={skill.name}
                  level={skill.level as any}
                  icon={skill.icon}
                  isPremium={skill.level === 'expert'}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
          
          {/* Detailed Skills with Progress Bars */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div 
                key={category.title} 
                className="glass-effect rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 scale-in border"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-center mb-8">
                  <div className="text-5xl mb-4 filter drop-shadow-lg">{category.icon}</div>
                  <h3 className="text-2xl font-bold font-display text-foreground mb-2">{category.title}</h3>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                </div>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      category={skill.isPremium ? 'expert' : skill.level >= 85 ? 'advanced' : 'intermediate'}
                      delay={index * 200 + skillIndex * 100}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Skills Summary */}
          <div className="mt-20 text-center slide-up">
            <div className="glass-effect rounded-3xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold font-display text-foreground mb-6">
                Continuous Learning Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Focused on building expertise in data-driven decision making, business intelligence, 
                and scalable analytics solutions that deliver measurable business impact.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">
                  15+ Projects Completed
                </span>
                <span className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full font-medium">
                  Multiple Certifications
                </span>
                <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full font-medium">
                  Industry Internships
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
