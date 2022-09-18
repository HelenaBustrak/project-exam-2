import getExistingCart from "../../utils/getExistingCart";
import { Container } from "react-bootstrap";
import CheckOutForm from "./CheckOutForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Col from "react-bootstrap/Col";

export default function CheckOut() {
  let cartLength = getExistingCart().length;
  const cart = getExistingCart();

  const navigate = useNavigate();
  return (
    <Container className="paymentForm__container">
      <Col>
        <h1>Payment</h1>
        <h6 onClick={() => navigate(-1)}>
          <FontAwesomeIcon icon={faArrowLeft} /> Go Back
        </h6>
        <Container>
          <CheckOutForm />
        </Container>
      </Col>

      <Col>
        <Container className="paymentForm__right">
          <h4>My Products ({cartLength})</h4>
          <hr></hr>
          {cart.map(function (item) {
            return (
              <div>
                <h5>{item.name}</h5>
              </div>
            );
          })}
        </Container>
      </Col>
    </Container>
  );
}
