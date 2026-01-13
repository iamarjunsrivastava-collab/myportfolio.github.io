import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Code, Database, BarChart3, Cloud, Wrench, Users } from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "SQL"],
      icon: Code,
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Libraries & Tools",
      skills: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "TensorFlow", "PyTorch", "OpenAI API", "NLP", "LLM"],
      icon: Wrench,
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "Data Visualization",
      skills: ["Power BI", "Tableau", "Matplotlib", "Seaborn", "Plotly"],
      icon: BarChart3,
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Database & Cloud",
      skills: ["MySQL", "AWS", "IBM Cloud"],
      icon: Database,
      color: "from-orange-500/20 to-red-500/20",
    },
    {
      title: "Technical Tools",
      skills: ["Git", "GitHub", "Visual Studio Code", "Excel"],
      icon: Cloud,
      color: "from-indigo-500/20 to-blue-500/20",
    },
    {
      title: "Soft Skills",
      skills: ["Cross-functional Collaboration", "Technical Communication", "Deadline Adherence", "Team Leadership"],
      icon: Users,
      color: "from-teal-500/20 to-cyan-500/20",
    },
  ];

  const handleSkillClick = (skill: string) => {
    setSelectedSkill(selectedSkill === skill ? null : skill);
  };

  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="container px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Skills & Tools
          </h2>
          <p className="text-3xl md:text-4xl font-bold">
            Technologies I <span className="gradient-text">work with</span>
          </p>
          <p className="text-muted-foreground mt-4 text-lg">
            A comprehensive toolkit for data science and development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
                className="group relative h-full"
              >
                {/* Gradient background effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative h-full min-h-[280px] p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary group-hover:text-primary/90 transition-colors">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 flex-1">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.button
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          duration: 0.3,
                          delay: 0.2 + categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                        onClick={() => handleSkillClick(skill)}
                        className={`px-3 py-2 text-sm rounded-lg font-medium transition-all duration-200 cursor-pointer h-fit
                          ${selectedSkill === skill 
                            ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25' 
                            : 'bg-secondary text-foreground hover:bg-primary/20 hover:text-primary'
                          }
                          focus:outline-none focus:ring-2 focus:ring-primary/50`}
                      >
                        {skill}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected skill indicator */}
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-sm text-primary font-medium">Selected:</span>
              <span className="text-sm font-semibold">{selectedSkill}</span>
              <button
                onClick={() => setSelectedSkill(null)}
                className="ml-2 w-4 h-4 rounded-full bg-primary/20 hover:bg-primary/30 flex items-center justify-center text-xs text-primary transition-colors"
              >
                ×
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Skills;
