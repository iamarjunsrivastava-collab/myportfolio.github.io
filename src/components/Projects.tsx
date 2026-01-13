import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, MessageSquare, BarChart3, Home } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Chat Cleaner – Chat Classifier Extension",
      period: "July 2025",
      description:
        "Developed a Chrome extension to capture and classify 100+ chat messages from Zoom, Meet, and MS Teams. Leveraged Sentence-BERT to semantically cluster messages, cutting question duplication by 70% per session. Integrated real-time toxicity detection, filtering out 95%+ of inappropriate or off-topic content before display.",
      tags: ["Python", "Flask", "JavaScript", "Chrome Extension APIs", "HTML/CSS", "Hugging Face Transformers"],
      icon: MessageSquare,
      github: "https://github.com/iamarjunsrivastava-collab/Chat-Cleaner---Chat-Classifier-Extension",
      demo: "#",
    },
    {
      title: "Sentiment Analysis Classifier",
      period: "January 2025",
      description:
        "Implemented a sentiment analysis pipeline for 80,000+ Amazon reviews in the musical instrument category. Applied text cleaning, tokenization, and data balancing techniques, increasing model accuracy by 12%. Trained and compared 5 machine learning models, achieving an F1-score of 87% on the best-performing classifier.",
      tags: ["Python", "Scikit-learn", "Pandas", "NLTK", "Matplotlib"],
      icon: BarChart3,
      github: "https://github.com/iamarjunsrivastava-collab/Sentiment-Analysis-Classifier",
      demo: "#",
    },
    {
      title: "House Price Prediction",
      period: "November 2025",
      description:
        "Developed a House Price Prediction system using Linear Regression trained on historical housing data with 8 key property features. Implemented a serverless backend for fast, real-time predictions along with confidence scores and model version tracking. Built an interactive web interface and visualization dashboard to display insights like average prices, property size stats, and dataset trends.",
      tags: ["Python", "Pandas", "Scikit-learn", "JavaScript", "HTML/CSS"],
      icon: Home,
      github: "https://github.com/iamarjunsrivastava-collab/House-Pricing-Prediction",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="section-padding relative">
      <div className="container px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Featured Projects
          </h2>
          <p className="text-3xl md:text-4xl font-bold">
            Data-driven solutions I've built
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs text-muted-foreground font-medium">{project.period}</span>
              </div>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs rounded-md bg-secondary text-muted-foreground font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                <a
                  href={project.demo}
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
