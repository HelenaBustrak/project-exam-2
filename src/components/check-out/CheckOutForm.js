import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

const schema = yup.object().shape({
  firstName: yup.string().required("Please enter your first-name"),
  lastName: yup.string().required("Please enter your last-name"),
  adress: yup
    .string()
    .required("Please enter an andress")
    .min(7, "Please enter a valid adress"),
  cardNumber: yup
    .number()
    .required("Please enter your card number")
    .min(15, "Please enter a valid card number"),
  expirationDate: yup.string().required("Please enter an expiration date"),
  cvv: yup
    .number()
    .required("Please enter your name")
    .min(3, "Please enter a valid email address"),
});

export default function CheckOutForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
    handleShow();
  }

  function confirmPayment() {
    navigate("/games");
    localStorage.removeItem("cart");
  }

  return (
    <>
      <h3 class="paymentForm__heading">Payment Form</h3>
      <Form className="forms" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="forms__label">First Name</Form.Label>
          <Form.Control
            className="forms__input"
            type="text"
            placeholder="Emma"
            {...register("firstName")}
          />
          {errors.firstName && <span>{errors.firstName.message}</span>}

          <Form.Label className="forms__label">Last Name</Form.Label>
          <Form.Control
            className="forms__input"
            type="text"
            placeholder="Young"
            {...register("lastName")}
          />
          {errors.lastName && <span>{errors.lastName.message}</span>}

          <Form.Label className="forms__label">Adress</Form.Label>
          <Form.Control
            className="forms__input"
            type="text"
            placeholder="Gårdsveien 45"
            {...register("adress")}
          />
          {errors.adress && <span>{errors.adress.message}</span>}
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <h4 class="paymentForm__heading">Card Details</h4>
          <Form.Label className="forms__label">Card Number</Form.Label>
          <Form.Control
            className="forms__input"
            type="number"
            placeholder="0000 0000 0000 0000"
            {...register("cardNumber")}
          />
          {errors.cardNumber && <span>{errors.cardNumber.message}</span>}

          <Form.Label className="forms__label">Expiration Date</Form.Label>
          <Form.Control
            className="forms__input"
            type="month"
            {...register("expirationDate")}
          />
          {errors.expirationDate && (
            <span>{errors.expirationDate.message}</span>
          )}

          <Form.Label className="forms__label">CVV</Form.Label>
          <Form.Control
            className="forms__input"
            type="number"
            placeholder="123"
            {...register("cvv")}
          />
          {errors.cvv && <span>{errors.cvv.message}</span>}
        </Form.Group>

        <Button
          className="btn-feature forms__button"
          variant="primary"
          type="submit"
        >
          Process Payment
        </Button>
      </Form>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Confirm Payment!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={confirmPayment}>
            Confirm Payment
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
