import styled, { keyframes } from "styled-components";

const fadeInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const StyledSidebar = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background: beige;
  height: 100vh;
  padding: 40px 40px;

  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-name: ${fadeInRight};

  p {
    font-size: 26px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 30px;
  }
  .close {
    position: absolute;
    top: 15px;
    right: 15px;
  }
`;

export const StyledSidebarUser = styled(StyledSidebar)`
  font-size: 30px;
  form {
    display: flex;
    flex-direction: column;
  }
`;

export const DataInput = styled.input.attrs({ type: "text" })`
  background: transparent;
  border: none;
  border-bottom: 1px solid grey;
  font-family: "Ysabeau", sans-serif;
  font-size: 1em;
  width: 10vw;
  margin-bottom: 20px;
  margin-left: 8px;
`;
export const StyledDate = styled.div`
  background: red;
  input {
    background: aqua;
  }
`;
export const LabelDate = styled.label`
  display: flex;
  input {
    background: transparent;
    border: none;
    border-bottom: 1px solid grey;
    font-family: "Ysabeau", sans-serif;
    font-size: 1em;
    width: 10vw;
    margin-bottom: 20px;
    margin-left: 8px;
  }
`;

export const WHtable = styled.table`
  border-collapse: collapse;
  width: 100%;

  th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
`;
