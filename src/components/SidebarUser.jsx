import { StyledSidebarUser } from "../styles/styledElement";
import { Button } from "../styles/styledLogin";
import styled from "styled-components";

export default function SidebarUser({ isOpen, setIsOpen }) {
  const DataInput = styled.input.attrs({ type: "text" })`
    background: transparent;
    border: none;
    border-bottom: 1px solid grey;
    font-family: "Ysabeau", sans-serif;
    font-size: 1em;
    width: 10vw;
    margin-bottom: 20px;
  `;
  return (
    <StyledSidebarUser>
      <div onClick={() => setIsOpen(!isOpen)}>
        <svg
          viewBox="0 0 24 24"
          width="20px"
          height="20px"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g id="Menu / Close_LG">
              <path
                id="Vector"
                d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
                stroke="#a7a7a7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </g>
        </svg>
      </div>
      <form>
        <label>
          Weight: <DataInput />
        </label>
        <label>
          Height: <DataInput />
        </label>
        <label>
          Date: <DataInput />
        </label>
        <Button $primary>Submit</Button>
      </form>
    </StyledSidebarUser>
  );
}
