import Layout from "../layout/Layout";
import CartItem from "./CartItem";
import { Container } from "react-bootstrap";
import getExistingCart from "../../utils/getExistingCart";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  let cartLength = getExistingCart().length;
  const navigate = useNavigate();

  if (cartLength === 0) {
    return (
      <Layout>
        <Container style={{ marginTop: "50px" }}>
          <h6 class="goBack" onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon={faArrowLeft} />
            Go Back
          </h6>
          No items in cart
        </Container>
      </Layout>
    );
  }
  return (
    <Layout>
      <Container className="cartContainer">
        <Container className="cartContainer__left">
          <h1>Shopping Cart</h1>
          <h6 class="goBack" onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon={faArrowLeft} />
            Go Back
          </h6>
          <h4>Total items: {cartLength}</h4>

          <CartItem />
        </Container>
        <Container className="cartContainer__right">
          <h3 className="cartContainer__orderHeading">Order Summary</h3>
          <hr></hr>
          <Container className="cartContainer__orderSummary">
            <div className="d-flex justify-content-between">
              <h5>Total Cost</h5>
              <h5>45$</h5>
            </div>
            <div className="d-flex justify-content-between">
              <h5>Total Cost</h5>
              <h5>45$</h5>
            </div>
            <hr></hr>
            <div className="totalCost d-flex justify-content-between">
              <h4>Total Cost</h4>
              <h4>45$</h4>
            </div>
          </Container>
          <Link to="/check-out">
            <Button className="btn-feature">Proceed to Payment</Button>
          </Link>
        </Container>
      </Container>
    </Layout>
  );
}
