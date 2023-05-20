import {
  LeftSide,
  RightSide,
  Layout,
  LoginForm,
  Header,
  Button,
  Input,
  Password,
} from "../styles/styledLogin";
import { Errormsg } from "../styles/styledRegister";
import { Link, useNavigate } from "react-router-dom";
import loginPic from "../assets/login.jpg";
import { useState } from "react";
import validateLogin from "../validators/validate-login";
import useAuth from "../hooks/useAuth";

export default function LoginPage() {
  const initialInput = { userName: "", password: "" };
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});
  const { login, authenticatedUser } = useAuth();
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const result = validateLogin(input);
      if (result) {
        setError(result);
      } else {
        setError({});
        await login(input);
        setInput(initialInput);
        alert("login successful");
        {
          authenticatedUser.role == "admin"
            ? navigate("/admin")
            : navigate("/user");
        }
      }
    } catch (err) {
      alert(err.response?.data.message);
    }
  };

  return (
    <Layout>
      <LeftSide>
        <img src={loginPic} />
      </LeftSide>
      <RightSide>
        <Header>Welcome back!</Header>
        <LoginForm onSubmit={handleSubmitForm}>
          <label>Username</label>
          <Input
            name="userName"
            value={input.userName}
            onChange={handleChangeInput}
          />
          <Errormsg>{error.userName}</Errormsg>

          <label>Password</label>
          <Password
            type="password"
            name="password"
            value={input.password}
            onChange={handleChangeInput}
          />
          <Errormsg>{error.password}</Errormsg>

          <Button $primary>Login</Button>
        </LoginForm>
        <div className="simple">
          <p>Don't have an account?</p>
          <Link to="/register">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </RightSide>
    </Layout>
  );
}
