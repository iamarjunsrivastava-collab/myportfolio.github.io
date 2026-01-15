import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin, Calendar, Building } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Data Visualization Intern",
      company: "Infosys",
      location: "Remote",
      period: "Sep 2025 – Nov 2025",
      type: "Internship",
      color: "from-blue-500/20 to-cyan-500/20",
      highlights: [
        "Led a team to create interactive dashboards on the 2019 Indian General Election for media and journalist use",
        "Designed data visualizations in Power BI and Tableau highlighting regional and party-wise performance",
        "Collected, cleaned, and analyzed large election datasets for accuracy and clarity",
        "Strengthened leadership and teamwork skills through effective project coordination",
      ],
    },
    {
      title: "AI and Cloud Intern",
      company: "Edunet Foundation",
      location: "Remote",
      period: "Jul 2025 – Aug 2025",
      type: "Internship",
      color: "from-purple-500/20 to-pink-500/20",
      highlights: [
        "Built an AI chatbot using IBM Cloud and Watson Assistant for automated query responses",
        "Applied NLP techniques to improve intent detection and response accuracy",
        "Designed conversational dialogue flows and trained datasets for better performance",
        "Deployed and tested the chatbot on IBM Cloud to ensure seamless functionality",
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding relative">
      <div className="container px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Work Experience
          </h2>
          <p className="text-3xl md:text-4xl font-bold">
            Where I've <span className="gradient-text">contributed</span>
          </p>
          <p className="text-muted-foreground mt-4 text-lg">
            Professional journey and key achievements
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Professional Experience</h3>
          </motion.div>

          <div className="space-y-8 ml-6 border-l-2 border-border pl-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group relative"
              >
                <div className="absolute -left-[45px] top-6 w-6 h-6 rounded-full bg-primary border-4 border-background group-hover:scale-110 transition-transform duration-300" />
                
                {/* Gradient background effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className={`relative h-full p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 bg-card border-border hover:border-primary/50`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                          {exp.type}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold mb-2 transition-colors group-hover:text-primary">
                        {exp.title}
                      </h4>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Building className="w-4 h-4" />
                          {exp.company}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.1 + i * 0.05 }}
                        className="text-sm text-muted-foreground flex gap-3"
                      >
                        <span className="text-primary mt-1.5 font-bold">•</span>
                        <span className="leading-relaxed">{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Click indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
