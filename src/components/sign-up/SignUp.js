import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Logo from "../../images/bits-bots-logo.png";
import { Link } from "react-router-dom";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Please enter an email adress")
    .email("Please enter a valid email address"),
  password: yup
    .string()
    .required("Please enter a password")
    .min(8, "Password is too short - should be 8 characters minimum."),
});

export default function SignUp() {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    localStorage.setItem("user", JSON.stringify(data));

    navigate("/login");
  }

  console.log(errors);
  return (
    <Container className="formContainer">
      <Container className="d-flex justify-content-center">
        <Link to="/">
          <img src={Logo} className="formBrand nav__brand" alt="Logo"></img>
        </Link>
      </Container>

      <h1 className="forms__heading">Sign Up</h1>
      <Form className="forms" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="forms__group mb-3" controlId="formBasicEmail">
          <Form.Label className="forms__label">Email address</Form.Label>
          <Form.Control
            className="forms__input"
            type="email"
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3 forms__group" controlId="formBasicPassword">
          <Form.Label className="forms__label">Password</Form.Label>
          <Form.Control
            className="forms__input"
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && (
            <span className="forms__error">{errors.password.message}</span>
          )}
        </Form.Group>

        <Button
          className="btn-feature forms__button"
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
}
