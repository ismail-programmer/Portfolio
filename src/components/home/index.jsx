import React from "react";
import Projects from "../projects";
import { Element } from "react-scroll";
import Experiance from "../experiance";
import Layout from "../layout";
import About from "../about";
import Contact from "../contact";
import Carousel from "../carousel";
import Testimonials from "../testimonials";
const Home = () => {
  document.body.classList.remove("overflow-hidden");
  document.body.style.overflow = `visible`;
  return (
    <div>
      <Layout>
        <Element name="about">
          <About />
        </Element>
        <Carousel />
        <Element name="testimonials">
          <Testimonials />
        </Element>
        <Element name="experiance">
          <Experiance />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </Layout>
    </div>
  );
};

export default Home;
