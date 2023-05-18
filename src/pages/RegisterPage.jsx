import { Layout, LeftSide, RightSide, Button } from "../styles/styledLogin";
import {
  Errormsg,
  RegisterForm,
  RegisterInput,
  RegisterPW,
} from "../styles/styledRegister";
import registerPic from "../assets/register.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as authApi from "../apis/auth-api";
import validateRegister from "../validators/validate-register";

export default function RegisterPage() {
  const initialInput = {
    userName: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phone: "",
    idCard: "",
  };
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const result = validateRegister(input);
      if (result) {
        setError(result);
      } else {
        setError({});
        await authApi.register(input);
        setInput(initialInput);
        alert("success register. please login to continue");
        navigate("/");
      }
    } catch (err) {
      alert(err.response?.data.message);
    }
  };

  return (
    <Layout>
      <LeftSide>
        <img src={registerPic} />
      </LeftSide>
      <RightSide>
        <RegisterForm onSubmit={handleSubmitForm}>
          <h1>Register</h1>
          <label>Username</label>
          <RegisterInput
            name="userName"
            value={input.userName}
            onChange={handleChangeInput}
          />
          <Errormsg>{error.userName}</Errormsg>
          <label>Password</label>
          <RegisterPW
            name="password"
            value={input.password}
            onChange={handleChangeInput}
          />
          <Errormsg>{error.password}</Errormsg>

          <label>Confirm password</label>
          <RegisterPW
            name="confirmPassword"
            value={input.confirmPassword}
            onChange={handleChangeInput}
          />
          <Errormsg>{error.confirmPassword}</Errormsg>

          <label>Firstname</label>
          <RegisterInput
            name="firstName"
            value={input.firstName}
            onChange={handleChangeInput}
          />
          <Errormsg>{error.firstName}</Errormsg>

          <label>Lastname</label>
          <RegisterInput
            name="lastName"
            value={input.lastName}
            onChange={handleChangeInput}
          />
          <Errormsg>{error.lastName}</Errormsg>

          <label>Phone number</label>
          <RegisterInput
            name="phone"
            value={input.phone}
            onChange={handleChangeInput}
          />
          <Errormsg>{error.phone}</Errormsg>

          <label>ID card number</label>
          <RegisterInput
            name="idCard"
            value={input.idCard}
            onChange={handleChangeInput}
          />
          <Errormsg>{error.idCard}</Errormsg>
          <Button $primary>Submit</Button>
        </RegisterForm>
      </RightSide>
    </Layout>
  );
}
