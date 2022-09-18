import { Container } from "react-bootstrap";
import getExistingCart from "../../utils/getExistingCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function CartItem() {
  const cartItems = getExistingCart();
  console.log(cartItems);

  return (
    <>
      {cartItems.map((game) => {
        function remove() {
          if (window.confirm("Are you sure?")) {
            const current = getExistingCart();
            const filtered = current.filter(
              (cartItem) => cartItem.name !== game.name
            );
            localStorage.setItem("cart", JSON.stringify(filtered));
            window.location.reload(false);
          }
        }
        return (
          <Container fluid className="cartCard">
            <Container className="d-flex">
              <Container
                className="cartCard__image"
                style={{
                  backgroundImage: `url(//images.igdb.com/igdb/image/upload/t_720p/${game.coverId}.jpg)`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></Container>
              <h5 className="cartCard__title">{game.name}</h5>
            </Container>
            <Container>
              <div className="cartCard__remove" onClick={remove}>
                <FontAwesomeIcon icon={faTrash} /> Remove
              </div>
            </Container>
          </Container>
        );
      })}
    </>
  );
}
