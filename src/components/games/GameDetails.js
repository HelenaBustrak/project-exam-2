import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/Api";
import axios from "axios";
import GamesHeader from "./GamesHeader";
import { Container } from "react-bootstrap";
import getExistingCart from "../../utils/getExistingCart";
import AddToCart from "../cart/AddToCart";
import { Breadcrumb } from "react-bootstrap";

export default function GameDetails({ setIsActive, isActive }) {
  const [game, setGame] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const cartItems = getExistingCart();

  let navigate = useNavigate();

  const { id } = useParams();

  console.log(id);

  if (!id) {
    navigate("/games");
  }

  const gameUrl = BASE_URL + "/" + id;

  useEffect(
    function () {
      async function fetchGame() {
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
              "fields name,cover,summary, cover.url,cover.width,cover.height,cover.image_id, first_release_date, genres, storyline, genres.name,screenshots, screenshots.url, screenshots.image_id, age_ratings.rating; " +
              `where id = ${id};`,
          });

          setGame(response.data);
          console.log(response.data);
          console.log(response.data[0].name);
        } catch (error) {
          setError(error.toString());
        } finally {
          setLoading(false);
        }
      }
      fetchGame();
    },
    [gameUrl]
  );

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
      {game.map(function (gameDetail) {
        const doesObjectExist = cartItems.find(function (item) {
          console.log(item);

          return parseInt(item.id) === gameDetail.name;
        });

        console.log(doesObjectExist);

        if (doesObjectExist) {
          setIsActive(true);
        }

        let unixTime = gameDetail.first_release_date;
        const releaseDate = new Date(unixTime * 1000);

        const gameGenres = gameDetail.genres.map(function (genre) {
          return (
            <button
              style={{ cursor: "default" }}
              className="genreContainer__button"
            >
              {genre.name}
            </button>
          );
        });

        return (
          <>
            <GamesHeader
              heading={gameDetail.name}
              image={`//images.igdb.com/igdb/image/upload/t_1080p/${gameDetail.screenshots[0].image_id}.jpg`}
              headingClass="gameHeader__headingDetails"
            >
              <Breadcrumb className="breadcrumbs-detailsPage">
                <Breadcrumb.Item
                  className="breadcrumbs-detailsPage__crumb"
                  href="/"
                >
                  Home
                </Breadcrumb.Item>
                <Breadcrumb.Item
                  className="breadcrumbs-detailsPage__crumb"
                  href="/games"
                >
                  Games
                </Breadcrumb.Item>
                <Breadcrumb.Item
                  className="breadcrumbs-detailsPage__crumb"
                  active
                >
                  {gameDetail.name}
                </Breadcrumb.Item>
              </Breadcrumb>
              <p></p>
            </GamesHeader>

            <Container>
              <Container className="gamesDetailsContent">
                <p className="gamesDetailsContent__par">{gameDetail.summary}</p>
                <Container className="d-flex justify-content-between">
                  <div className="gamesDetailsContent__price">
                    <h4>48$</h4>
                  </div>
                  <AddToCart
                    name={gameDetail.name}
                    cover={gameDetail.cover.url}
                    coverId={gameDetail.cover.image_id}
                  />
                </Container>
                <h6 className="releaseDate">
                  Release Date: {releaseDate.toLocaleDateString("en-US")}
                </h6>
                <div>
                  <h5>Genres</h5>
                  {gameGenres}
                </div>
              </Container>
            </Container>
          </>
        );
      })}
    </>
  );
}
