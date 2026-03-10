import "./services.css";
import { BiCheck } from "react-icons/bi";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Services = () => {
  const serviceVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services-container">
        {[
          {
            title: "UI/UX Design",
            items: [
              "Conducting thorough research to understand the needs.",
              "Creating wireframes and prototypes to visualize.",
              "Designing visually appealing interfaces.",
              "Defining how users interact with the interface.",
              "Conducting usability tests with real users to evaluate."
            ]
          },
          {
            title: "Web Development",
            items: [
              "Creating the visual and interactive parts of websites.",
              "Ensuring that websites adapt and display.",
              "Implement responsive design for optimal viewing across devices.",
              "Optimizing websites for speed and efficiency.",
              "Integrate animations and transitions for enhanced user experience.",
              "Using version control systems like Git to manage code changes."
            ]
          },
          {
            title: "Content Creation",
            items: [
              "Conducting thorough research to understand the target.",
              "Developing high-quality, engaging.",
              "Optimizing content for search engines.",
              "Strategically promoting content through various channels.",
              "Monitoring and analyzing the performance."
            ]
          }
        ].map((service, index) => (
          <motion.div
            key={index}
            variants={serviceVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} className="service-tilt">
              <article className="service glass">
                <div className="service-head">
                  <h3>{service.title}</h3>
                </div>

                <ul className="service-list">
                  {service.items.map((item, idx) => (
                    <li key={idx}>
                      <BiCheck className="service-list-icon" />
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </article>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
