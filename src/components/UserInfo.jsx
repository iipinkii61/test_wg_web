import styled from "styled-components";

export default function UserInfo() {
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
  return (
    <Info>
      <p>
        <span>Name:</span> yuta nakamoto
      </p>
      <p>
        <span>Phone number:</span> 0999999999
      </p>
      <p>
        <span>ID card:</span> 9999999999999
      </p>
    </Info>
  );
}
