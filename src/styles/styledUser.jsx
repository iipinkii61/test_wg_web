import styled from "styled-components";

export const UserLayout = styled.div`
  display: flex;
  h1 {
    font-weight: 700;
    font-size: 38px;
    margin-bottom: 30px;
  }
  .page {
    padding: 60px;
    box-sizing: border-box;
    width: 100vw;
  }
  .simple {
    text-align: end;
  }
`;

export const NavBar = styled.div`
  height: 100vh;
  padding-top: 30px;
  background: rgba(105, 166, 249, 0.25);
  width: 5.5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const AdminNavBar = styled(NavBar)`
  background: rgba(177, 102, 204, 0.25);
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  font-size: 20px;
  th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    vertical-align: middle;
  }

  tr:hover {
    background-color: #f0f0f0;
  }

  th:last-child {
    width: 10%;
  }

  .icon {
    display: flex;
    gap: 10px;
  }
`;

export const AddButton = styled.button`
  background: #69a6f9;
  color: white;
  font-size: 16px;
  padding: 0.25em 1.25em;
  border: 2px solid #69a6f9;
  border-radius: 8px;
  cursor: pointer;
  font-family: "Ysabeau", sans-serif;
`;
