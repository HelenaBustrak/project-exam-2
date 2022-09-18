import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/Api";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Genres } from "./Genres";
import { Link } from "react-router-dom";
import GamesHeader from "./GamesHeader";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BackgroundImage from "../../images/background-landing-page.png";
import AddToCart from "../cart/AddToCart";
import { Breadcrumb } from "react-bootstrap";

export default function ListGames() {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(function () {
    async function fetchGames(props) {
      try {
        const response = await axios({
          url: BASE_URL,
          method: "POST",
          headers: {
            Accept: "application/json",
            "Client-ID": "ub5nb3r2rm1wfo4exvd307l43rzfg5",
            Authorization: "Bearer ixlf8r8txpedrlojr2544rr6m2gjdm",
          },
          data:
            "fields id, name, genres,cover, cover.url,cover.height,cover.image_id,cover.width,summary, platforms; sort cover;limit 50;" +
            `where first_release_date > 1598520000 & rating < 80;`,
        });

        setGames(response.data);
        setFilteredGames(response.data);
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchGames();
  }, []);

  if (loading) {
    return (
      <>
        <Container>
          <div className="loader"></div>
        </Container>
      </>
    );
  }

  if (error) {
    return <div>Error.</div>;
  }

  return (
    <>
      <GamesHeader
        heading="Browse Our Games"
        secondHeading="Select a Genre"
        image={BackgroundImage}
        headingClass="gameHeader__heading"
      >
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Games</Breadcrumb.Item>
        </Breadcrumb>
        <Genres
          games={games}
          setFilteredGames={setFilteredGames}
          activeGenre={activeGenre}
          setActiveGenre={setActiveGenre}
        />
      </GamesHeader>

      <Container>
        <h3 className="gamesHeading">
          {activeGenre === 5
            ? "Shooter"
            : "All games" && activeGenre === 12
            ? "Role-playing (RPG)"
            : "All games" && activeGenre === 14
            ? "Sport"
            : "All games" && activeGenre === 31
            ? "Adventure"
            : "All games" && activeGenre === 32
            ? "Indie"
            : "All games" && activeGenre === 4
            ? "Fighting"
            : "All games" && activeGenre === 8
            ? "Platform"
            : "All games" && activeGenre === 13
            ? "Simulator"
            : "All games" && activeGenre === 24
            ? "Tactical"
            : "All games"}
        </h3>
        <Row xs="auto">
          {filteredGames.map(function (game) {
            return (
              <Col key={game.id} className="cardContainer">
                <Card className="card d-flex">
                  <Card.Img
                    className="card__image"
                    variant="top"
                    src={`//images.igdb.com/igdb/image/upload/t_720p/${game.cover.image_id}.jpg`}
                  />
                  <Card.Body className="card__body">
                    <Card.Title className="card__title">{game.name}</Card.Title>
                    <AddToCart
                      name={game.name}
                      cover={game.cover.url}
                      coverId={game.cover.image_id}
                    />

                    <Card.Text>$45.3</Card.Text>
                    <Link to={`detail/${game.id}`}>
                      <Button className="card__button btn-feature">
                        More info
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
