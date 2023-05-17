import {
  LeftSide,
  RightSide,
  Layout,
  LoginForm,
  Header,
  Button,
  Input,
  Password,
  IsAdmin,
} from "../styles/styledLogin";
import { Link } from "react-router-dom";
import loginPic from "../assets/login.jpg";

export default function LoginPage() {
  return (
    <Layout>
      <LeftSide>
        <img src={loginPic} />
      </LeftSide>
      <RightSide>
        <Header>Welcome back!</Header>
        <LoginForm>
          <label>Username</label>
          <Input />
          <label>Password</label>
          <Password />
          <IsAdmin>
            <input type="checkbox" />
            Admin
          </IsAdmin>
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
