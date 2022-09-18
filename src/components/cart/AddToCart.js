import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import getExistingCart from "../../utils/getExistingCart";
import { useState } from "react";

export default function AddToCart(props, { setFilteredGames }) {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    if (window.confirm("Are you sure?")) {
      setIsActive((current) => !current);
    }

    const name = props.name;
    const cover = props.cover;
    const coverId = props.coverId;

    const currentCart = getExistingCart();

    const gameExists = currentCart.find(function (game) {
      return game.name === name;
    });

    if (gameExists === undefined) {
      const gameDetails = { name: name, cover: cover, coverId: coverId };
      currentCart.push(gameDetails);
      saveCart(currentCart);
    } else {
      const newCart = currentCart.filter((game) => game.name !== name);
      saveCart(newCart);
    }
  }

  function saveCart(shoppingCart) {
    localStorage.setItem("cart", JSON.stringify(shoppingCart));
  }

  return (
    <Container
      name={props.name}
      cover={props.cover}
      onClick={handleClick}
      className={
        isActive
          ? "d-flex gamesDetailsContent__cartContainer gamesDetailsContent__cartContainerActive "
          : "d-flex gamesDetailsContent__cartContainer"
      }
    >
      <FontAwesomeIcon
        className="gamesDetailsContent__cartIcon"
        icon={faCartArrowDown}
      />
      <h6>{isActive ? "Added to cart" : "Add to cart"}</h6>
    </Container>
  );
}
