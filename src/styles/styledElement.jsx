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
  div {
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
