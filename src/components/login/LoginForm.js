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
  password: yup.string().required("Please enter a password"),
});

export default function LoginForm(props) {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    if (localStorage.getItem("user")) {
      const loginDetails = JSON.parse(localStorage.getItem("user"));
      if (
        data.email === loginDetails.email &&
        data.password === loginDetails.password
      ) {
        console.log("Login sucessful");
        navigate("/games");
      } else {
        console.log("Wrong Credentials");
      }
    } else {
      console.log("Not a registered user");
    }
  }

  return (
    <Container className="formContainer">
      <Container className="d-flex justify-content-center">
        <Link to="/">
          <img src={Logo} className="formBrand nav__brand" alt="Logo"></img>
        </Link>
      </Container>
      <h1 className="forms__heading">Log in</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3 forms__group" controlId="formBasicEmail">
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
          {errors.password && <span>{errors.password.message}</span>}
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
