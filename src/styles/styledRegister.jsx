import styled from "styled-components";
import { Input, Password } from "./styledLogin";

export const RegisterForm = styled.form`
  height: 70vh;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  gap: 13px;
  h1 {
    font-size: 2em;
  }
`;

export const RegisterInput = styled(Input)`
  font-size: 14px;
`;

export const RegisterPW = styled(Password)`
  font-size: 14px;
`;

export const Errormsg = styled.p`
  color: red;
  font-size: 14px;
  position: relative;
  top: -10px;
`;
