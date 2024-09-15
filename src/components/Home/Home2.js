import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
                I fell in love with programming and have learned a lot along the way! 🚀
                <br />
                <br />I am fluent in modern technologies like
                <i>
                  <b className="purple"> JavaScript (ES6+), React.js, and CSS3. </b>
                </i>
                <br />
                <br />
                My fields of interest are building new &nbsp;
                <i>
                  <b className="purple"> Web Technologies</b> and areas related to{" "}
                  <b className="purple"> Frontend Development</b>.
                </i>
                <br />
                <br />
                Whenever possible, I apply my passion for developing products with {" "} 
                <b className="purple"> React.js</b> and
                <i> 
                  <b className="purple">
                    {" "} Modern JavaScript Libraries and Frameworks
                  </b>
                </i>
                &nbsp; like {" "}
                <i>
                  <b className="purple">Next.js, Redux, and Context API</b>
                </i>.
                <br />
                <br />
                I also enjoy working with responsive design using &nbsp;
                <i>
                  <b className="purple">CSS3, Flexbox, Grid, and Bootstrap</b>
                </i> and have hands-on experience with version control tools like {" "}
                <i>
                  <b className="purple">Git and GitHub</b>
                </i>.
                <br />
                <br />
                I focus on handling APIs and data using &nbsp;
                <i>
                  <b className="purple">RESTful APIs and JSON</b>
                </i>, while always striving to create smooth and engaging user experiences.
              </p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/VishalAdhikari18"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/18_Vishal_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vishaladhikari1817/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
