import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Crypto Hack!"
              description="Crypto Hack is a web application designed to provide users with real-time data on cryptocurrency prices and market trends. The platform allows users to track various cryptocurrencies, view historical performance, and analyze market fluctuations. Built using React.js and powered by an API for live data, it features a clean, user-friendly interface for navigating through different coins, market insights, and price comparisons."
              ghLink="https://github.com/VishalAdhikari18/crypto_hack"
              demoLink="https://crypto-hack.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="RentUP"
              description="RentUp is an intuitive web application designed to streamline the rental property management process. It provides a user-friendly interface for landlords and tenants to manage rental listings, view property details, and track lease agreements. The platform is built with React.js, featuring a responsive design to ensure a seamless experience across various devices."
              ghLink="https://github.com/VishalAdhikari18/rentup"
              demoLink="https://rentup-mu.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Student Result Analysis"
              description="Developed a data analysis tool that processes student performance data from CSV files. The application generates statistical insights like average marks, comparisons, and grade distributions, all visualized through interactive charts. It assists educators in identifying performance trends and areas of improvement. The project can be easily customized for various educational datasets, making it adaptable for different grading systems and academic institutions."
              ghLink="https://github.com/VishalAdhikari18/Student-Result-Analysis"
                          
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
