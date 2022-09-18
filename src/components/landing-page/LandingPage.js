import Container from "react-bootstrap/Container";
import Ratio from "react-bootstrap/Ratio";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Video from "../../images/landing-page-video.mp4";
import Button from "react-bootstrap/Button";
import Logo from "../../images/bits-bots-logo.png";
import Background from "../../images/background-landing-page.png";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div
      className="landingPage__wrapper wrapper"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Container className="container">
        <div>
          <img
            src={Logo}
            className="landingPage__brand nav__brand"
            alt="Logo"
          ></img>
        </div>
        <Row>
          <Col sm={12} lg={6}>
            <h1 className="landingPage__heading">
              Discover great games for a great prize.
            </h1>
            <p className="landingPage__paragraph">
              Sign up and explore our collection of great games. We offer
              hundreds of hours of fun for a great price!
            </p>
            <Container className="landingPage__buttonContainer">
              <Link to="/sign-up">
                <Button className="landingPage__button btn-feature" size="lg">
                  Sign up
                </Button>
              </Link>

              <Link to="/login">
                <Button className="landingPage__button btn-feature-2" size="lg">
                  Log in
                </Button>
              </Link>
            </Container>
          </Col>
          <Col>
            <div className="landingPage__video" style={{ height: "auto" }}>
              <Ratio aspectRatio="16x9">
                <embed type="video/mp4" src={Video} />
              </Ratio>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
