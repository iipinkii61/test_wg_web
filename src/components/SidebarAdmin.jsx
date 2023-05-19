import { StyledSidebar, WHtable } from "../styles/styledElement";

export default function SidebarAdmin({ setIsOpen, userData }) {
  return (
    <StyledSidebar className="fadeInRight">
      <div onClick={() => setIsOpen(false)} className="close">
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
      <p>{userData.firstName}'s data records</p>
      <WHtable>
        <tbody>
          <tr>
            <th>Weight</th>
            <th>Height</th>
            <th>Date</th>
          </tr>
          {userData.WeightHeights.map((obj) => (
            <tr key={obj.id}>
              <td>{obj.weight}</td>
              <td>{obj.height}</td>
              <td>{obj.date}</td>
            </tr>
          ))}
        </tbody>
      </WHtable>
    </StyledSidebar>
  );
}
