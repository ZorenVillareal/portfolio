import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Bio } from "../../data/info";
import Typewriter from "typewriter-effect";
import './Hero.css';
import HeroImg from '../../images/HeroImage.jpg';
import HeroBg from './HeroBg'
import React, { useState } from 'react';
import { Link } from "react-router-dom";

const paragraphStyles = {
  WebkitLineClamp: 10,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  display: '-webkit-box'
};

const Hero =()=> {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section id="about">
    <div className="hero-background">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 col-lg-5 mb-4" >
            <Card className="text-center h-100" >
              <Card.Body>
              <Card.Title>
                  <br /> {Bio.name}
                </Card.Title>
                <Card.Text>
                  <div>
                  <p style={isOpen ? null : paragraphStyles}>{Bio.description}</p>
                <Button className="read-more-btn" onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? 'Read less...' : 'Read more...'}
                </Button>
              </div>
              </Card.Text>

              </Card.Body>
            </Card>
          </div>

          <div className="col-md-6 col-lg-4 mb-4">
            <Card className="h-100">
              <Card.Body className="d-flex justify-content-center align-items-center">
                <img src={HeroImg} alt="Hero" className="rounded-image" />

                <Card.Text>

                  <span>
                    <Typewriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>
                  </Card.Text>
                {/* <Link> */}
                <Button as={Link} variant="primary" to={Bio.linkedin} className="button-spacing">Linkedin</Button>
<Button href={Bio.resume} target='display' className="button-spacing"> Resume</Button>

                {/* </Link> */}
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Hero;