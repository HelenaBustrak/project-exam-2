import { Container } from "react-bootstrap";
export default function GamesHeader(props) {
  return (
    <Container
      className="gameHeader"
      fluid
      style={{
        backgroundImage: `url(${props.image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Container className="gameHeader__innerContainer">
        {props.children[0]}
        <h1 className={props.headingClass}>{props.heading}</h1>
        <h4 className="gameHeader__secondHeading">{props.secondHeading}</h4>
        {props.children[1]}
      </Container>
    </Container>
  );
}
