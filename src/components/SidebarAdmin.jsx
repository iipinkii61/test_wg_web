import { StyledSidebar, WHtable } from "../styles/styledElement";

export default function SidebarAdmin({ isOpen, setIsOpen }) {
  return (
    <StyledSidebar className="fadeInRight">
      <div onClick={() => setIsOpen(!isOpen)} className="close">
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
      <p>Firstname's data records</p>
      <WHtable>
        <tbody>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Savings</th>
          </tr>
          <tr>
            <td>Peter</td>
            <td>Griffin</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>Lois</td>
            <td>Griffin</td>
            <td>$150</td>
          </tr>
          <tr>
            <td>Joe</td>
            <td>Swanson</td>
            <td>$300</td>
          </tr>
          <tr>
            <td>Cleveland</td>
            <td>Brown</td>
            <td>$250</td>
          </tr>
        </tbody>
      </WHtable>
    </StyledSidebar>
  );
}
