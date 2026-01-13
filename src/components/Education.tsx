import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [isEducationSelected, setIsEducationSelected] = useState(false);

  const education = {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "United University",
    location: "Prayagraj, India",
    period: "September 2023 – Present",
    type: "Undergraduate",
    color: "from-emerald-500/20 to-teal-500/20",
    coursework: [
      "Database Management System",
      "Data Visualization",
      "Artificial Intelligence",
      "Soft Computing",
      "Natural Language Processing",
      "Data Analytics",
      "Machine Learning",
      "Data Science",
    ],
  };

  const handleCourseClick = (course: string) => {
    setSelectedCourse(selectedCourse === course ? null : course);
  };

  const handleEducationClick = () => {
    setIsEducationSelected(!isEducationSelected);
  };

  return (
    <section id="education" className="section-padding relative">
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
            Education
          </h2>
          <p className="text-3xl md:text-4xl font-bold">
            Academic <span className="gradient-text">background</span>
          </p>
          <p className="text-muted-foreground mt-4 text-lg">
            Building a strong foundation in computer science and engineering
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Academic Journey</h3>
          </div>

          <motion.div
            className="group relative cursor-pointer"
            onClick={handleEducationClick}
          >
            {/* Gradient background effect */}
            <div className={`absolute inset-0 bg-gradient-to-r ${education.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            <div className={`relative p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:shadow-primary/10
              ${isEducationSelected 
                ? 'bg-primary/5 border-primary/50 shadow-lg shadow-primary/20' 
                : 'bg-card border-border hover:border-primary/50'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {education.type}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {education.period}
                    </div>
                  </div>
                  <h4 className={`text-lg font-semibold mb-3 transition-colors
                    ${isEducationSelected ? 'text-primary' : 'group-hover:text-primary'}
                  `}>
                    {education.degree}
                  </h4>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      {education.institution}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {education.location}
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <p className="text-sm font-medium mb-4 flex items-center gap-2">
                  <span>Relevant Coursework:</span>
                  <span className="text-xs text-muted-foreground">({education.coursework.length} courses)</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course, index) => (
                    <motion.button
                      key={course}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: 0.3 + index * 0.05,
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCourseClick(course);
                      }}
                      className={`px-3 py-2 text-sm rounded-lg font-medium transition-all duration-200 cursor-pointer
                        ${selectedCourse === course 
                          ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25' 
                          : 'bg-secondary text-foreground hover:bg-primary/20 hover:text-primary'
                        }
                        focus:outline-none focus:ring-2 focus:ring-primary/50`}
                    >
                      {course}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Click indicator */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Selected indicators */}
        <div className="mt-8 flex flex-col items-center gap-4">
          {isEducationSelected && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-sm text-primary font-medium">Selected Education:</span>
                <span className="text-sm font-semibold">B.Tech CSE</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsEducationSelected(false);
                  }}
                  className="ml-2 w-4 h-4 rounded-full bg-primary/20 hover:bg-primary/30 flex items-center justify-center text-xs text-primary transition-colors"
                >
                  ×
                </button>
              </div>
            </motion.div>
          )}

          {selectedCourse && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <span className="text-sm text-emerald-600 font-medium">Selected Course:</span>
                <span className="text-sm font-semibold">{selectedCourse}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCourse(null);
                  }}
                  className="ml-2 w-4 h-4 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 flex items-center justify-center text-xs text-emerald-600 transition-colors"
                >
                  ×
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;
