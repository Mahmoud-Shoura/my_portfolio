import "./experience.css";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMongodb, SiCplusplus } from "react-icons/si";
import { motion } from "framer-motion";

const Experience = () => {
  const getLevelWidth = (level) => {
    switch (level) {
      case 'Experienced': return '95%';
      case 'Intermediate': return '75%';
      case 'Basic': return '45%';
      default: return '50%';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience-container">
        <motion.div
          className="experience-frontend glass"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3>Frontend Development</h3>
          <motion.div
            className="experience-content"
            variants={containerVariants}
          >
            {[
              { icon: FaHtml5, name: 'HTML', level: 'Experienced' },
              { icon: FaCss3Alt, name: 'CSS', level: 'Experienced' },
              { icon: SiJavascript, name: 'JavaScript', level: 'Experienced' },
              { icon: FaBootstrap, name: 'Bootstrap', level: 'Experienced' },
              { icon: SiTailwindcss, name: 'Tailwind', level: 'Experienced' },
              { icon: FaReact, name: 'React', level: 'Experienced' },
            ].map((skill, index) => (
              <motion.article key={index} className="experience-details" variants={itemVariants}>
                <skill.icon className="experience-details-icon" />
                <div>
                  <h4>{skill.name}</h4>
                  <small className="text-light">{skill.level}</small>
                  <div className="progress-bar">
                    <motion.div
                      className="progress-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: getLevelWidth(skill.level) }}
                      transition={{ duration: 1, delay: 0.5 }}
                    ></motion.div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="experience-backend glass"
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3>Things I know</h3>
          <motion.div
            className="experience-content"
            variants={containerVariants}
          >
            {[
              { icon: FaNodeJs, name: 'Node JS', level: 'Basic' },
              { icon: SiMongodb, name: 'MongoDB', level: 'Basic' },
              { icon: FaPython, name: 'Python', level: 'Basic' },
              { icon: SiCplusplus, name: 'C & C++', level: 'Intermediate' },
            ].map((skill, index) => (
              <motion.article key={index} className="experience-details" variants={itemVariants}>
                <skill.icon className="experience-details-icon" />
                <div>
                  <h4>{skill.name}</h4>
                  <small className="text-light">{skill.level}</small>
                  <div className="progress-bar">
                    <motion.div
                      className="progress-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: getLevelWidth(skill.level) }}
                      transition={{ duration: 1, delay: 0.5 }}
                    ></motion.div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
