import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Bio } from "../../data/info";
import Typewriter from "typewriter-effect";
import './Hero.css';
import HeroImg from '../../images/HeroImage.jpg';
import HeroBg from './HeroBg'

const Hero =()=> {
  return (
    <div className="hero-background">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 col-lg-5 mb-4">
            <Card className="text-center h-100">
              <Card.Body>
                <Card.Title>
                  Hi, I am
                  <br /> {Bio.name}
                </Card.Title>
                <Card.Text>
                  I am a
                  <span>
                    <Typewriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>
                  <div>
                    {Bio.description}
                  </div>
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-6 col-lg-4 mb-4">
            <Card className="h-100">
              <Card.Body className="d-flex justify-content-center align-items-center">
                <img src={HeroImg} alt="Hero" className="rounded-image" />
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;