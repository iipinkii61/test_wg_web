import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  .simple {
    display: flex;
    align-items: center;
    gap: 30px;
  }
`;

export const LeftSide = styled.div`
  width: 40vw;
  display: flex;
  align-items: center;
  img {
    width: 100%;
  }
`;

export const RightSide = styled.div`
  box-sizing: border-box;
  height: 100vh;
  width: 60vw;
  padding: 80px 100px;
`;

export const Header = styled.h1`
  font-weight: 700;
  font-size: 36px;
`;

export const LoginForm = styled.form`
  height: 70vh;
  font-size: 26px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Button = styled.button`
  background: ${(props) => (props.$primary ? "#b166cc" : "white")};
  color: ${(props) => (props.$primary ? "white" : "#b166cc")};
  font-size: 20px;
  padding: 0.25em 1em;
  border: 2px solid #b166cc;
  border-radius: 28px;
  cursor: pointer;
  width: 10vw;
  font-family: "Ysabeau", sans-serif;
`;

export const Input = styled.input.attrs({ type: "text" })`
  background: transparent;
  border-radius: 6px;
  border: 1.5px #cfcfcf solid;
  padding: 0.25em 1em;
  font-size: 20px;
  font-family: "Ysabeau", sans-serif;
`;

export const Password = styled(Input).attrs({
  type: "password",
})``;

export const IsAdmin = styled.label`
  display: flex;
  gap: 8px;
  width: fit;
`;
