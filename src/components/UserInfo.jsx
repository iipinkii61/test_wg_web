import styled from "styled-components";

const Info = styled.div`
  p {
    margin-bottom: 20px;
    font-size: 20px;
  }
  span {
    font-weight: 700;
    margin-right: 10px;
  }
`;
export default function UserInfo({ firstName, lastName, phone, idCard }) {
  return (
    <Info>
      <p>
        <span>Name:</span> {firstName} {lastName}
      </p>
      <p>
        <span>Phone number:</span> {phone}
      </p>
      <p>
        <span>ID card:</span> {idCard}
      </p>
    </Info>
  );
}
