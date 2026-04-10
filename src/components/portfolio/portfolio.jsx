import "./portfolio.css";
import IMG0 from "../../assets/Screenshot 2026-04-10 195415.png";
import IMG1 from "../../assets/Edusity.png";
import IMG2 from "../../assets/Autumn.png";
import IMG3 from "../../assets/shopper-mhs.png";
import IMG4 from "../../assets/tailwind-project.png";
import IMG5 from "../../assets/MHS-site.png";
import IMG6 from "../../assets/animated-portfolio.png";
import IMG7 from "../../assets/Gym-Website.png";
import IMG8 from "../../assets/nestcare.png";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const data = [
  {
    id: 0,
    image: IMG0,
    title: "AUIE Website full stack using react & nodejs",
    github: "https://github.com/Mahmoud-Shoura/AUIE-Website",
    demo: "https://auie-edu.us",
  },
  {
    id: 1,
    image: IMG1,
    title: "Responciv University Website Edusity",
    github: "https://github.com/Mahmoud-Shoura/Edusity",
    demo: "https://edusity-dc265.web.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Responciv Autumn Shoping Website only front-end using React hooks",
    github: "https://github.com/Mahmoud-Shoura/Ecommerce-Shop",
    demo: "https://autumn-ee78e.web.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Full E-commerce Front-end",
    github: "https://github.com/Mahmoud-Shoura/full-e-commerce",
    demo: "https://shopper-mhs.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Responciv Tailwind-Project",
    github: "https://github.com/Mahmoud-Shoura/tailwind-1",
    demo: "https://tailwind-project-mhs.netlify.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Responciv MHS-Bootstrap Website using owl cursor",
    github: "https://github.com/Mahmoud-Shoura/portfolio-website-MHS",
    demo: "https://master--portfolio-website-mhs.netlify.app/",
  },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: "Responciv Animated portfolio with react & framer motion",
  //   github: "https://github.com/Mahmoud-Shoura/animated-portfolio",
  //   demo: "https://chic-stroopwafel-7c93af.netlify.app/",
  // },
  {
    id: 7,
    image: IMG7,
    title: "Responciv Gym Website, Multiple pages",
    github: "https://github.com/Mahmoud-Shoura/responsiveModernReactWebsite",
    demo: "https://danger-gym-6fd24.web.app/",
  },
  {
    id: 8,
    image: IMG8,
    title: "NestCare Website, ",
    github: "https://github.com/Mahmoud-Shoura/NestCare",
    demo: "https://nestcare.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} className="portfolio-tilt">
                <article className="portfolio-item glass">
                  <div className="portfolio-item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio-item-cta">
                    <a href={github} className="btn" target="__blank">
                      Github
                    </a>
                    <a href={demo} className="btn btn-primary" target="__blank">
                      Live Demo
                    </a>
                  </div>
                </article>
              </Tilt>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
