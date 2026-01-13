import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Target, Sparkles } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Pursuing B.Tech in Computer Science with specialization in Data Science & Analytics",
    },
    {
      icon: Target,
      title: "Focus",
      description: "Machine Learning, Statistical Analysis, Data Visualization, and Predictive Modeling",
    },
    {
      icon: Sparkles,
      title: "Passion",
      description: "Turning complex data into meaningful stories that drive business decisions",
    },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
            About Me
          </h2>
          <p className="text-3xl md:text-4xl font-bold mb-6">
            Bridging the gap between{" "}
            <span className="gradient-text">data and decisions</span>
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I'm a passionate data science student who believes in the power of analytics 
            to solve real-world problems. With a strong foundation in statistics, 
            programming, and machine learning, I'm on a mission to unlock insights 
            that matter.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group p-6 rounded-2xl glass hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <card.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;