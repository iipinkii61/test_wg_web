import { Layout, LeftSide, RightSide, Button } from "../styles/styledLogin";

import {
  RegisterForm,
  RegisterInput,
  RegisterPW,
} from "../styles/styledRegister";
import registerPic from "../assets/register.jpg";

export default function RegisterPage() {
  return (
    <Layout>
      <LeftSide>
        <img src={registerPic} />
      </LeftSide>
      <RightSide>
        <RegisterForm>
          <h1>Register</h1>
          <label>Username</label>
          <RegisterInput />
          <label>Password</label>
          <RegisterPW />
          <label>Confirm password</label>
          <RegisterPW />
          <label>Firstname</label>
          <RegisterInput />
          <label>Lastname</label>
          <RegisterInput />
          <label>Phone number</label>
          <RegisterInput />
          <label>ID card number</label>
          <RegisterInput />

          <Button $primary>Submit</Button>
        </RegisterForm>
      </RightSide>
    </Layout>
  );
}
