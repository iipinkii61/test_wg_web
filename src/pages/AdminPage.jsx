import { useState } from "react";
import SidebarAdmin from "../components/SidebarAdmin";
import { Table, UserLayout } from "../styles/styledUser";
import NavAdmin from "../components/NavAdmin";

export default function AdminPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <UserLayout>
      {isOpen && <SidebarAdmin isOpen={isOpen} setIsOpen={setIsOpen} />}
      <NavAdmin />
      <div className="page">
        <h1>Welcome Admin!</h1>
        <p>User information</p>
        <Table>
          <tbody>
            <tr onClick={() => setIsOpen(!isOpen)}>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Username</th>
              <th>Phone number</th>
              <th>ID card</th>
              <th></th>
            </tr>
            <tr>
              <td>first</td>
              <td>last</td>
              <td>useruser</td>
              <td>0888888888</td>
              <td>1111111111111</td>
              <td className="icon">
                <svg
                  fill="#000000"
                  width="1.25em"
                  height="1.25em"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 41.336 41.336"
                  xmlSpace="preserve"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <path d="M36.335,5.668h-8.167V1.5c0-0.828-0.672-1.5-1.5-1.5h-12c-0.828,0-1.5,0.672-1.5,1.5v4.168H5.001c-1.104,0-2,0.896-2,2 s0.896,2,2,2h2.001v29.168c0,1.381,1.119,2.5,2.5,2.5h22.332c1.381,0,2.5-1.119,2.5-2.5V9.668h2.001c1.104,0,2-0.896,2-2 S37.438,5.668,36.335,5.668z M14.168,35.67c0,0.828-0.672,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-21c0-0.828,0.672-1.5,1.5-1.5 s1.5,0.672,1.5,1.5V35.67z M22.168,35.67c0,0.828-0.672,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-21c0-0.828,0.672-1.5,1.5-1.5 s1.5,0.672,1.5,1.5V35.67z M25.168,5.668h-9V3h9V5.668z M30.168,35.67c0,0.828-0.672,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-21 c0-0.828,0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5V35.67z"></path>
                    </g>
                  </g>
                </svg>
              </td>
            </tr>
            <tr>
              <td>first</td>
              <td>last</td>
              <td>useruser</td>
              <td>0888888888</td>
              <td>1111111111111</td>
              <td className="icon">
                <svg
                  fill="#000000"
                  width="1.25em"
                  height="1.25em"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 41.336 41.336"
                  xmlSpace="preserve"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <path d="M36.335,5.668h-8.167V1.5c0-0.828-0.672-1.5-1.5-1.5h-12c-0.828,0-1.5,0.672-1.5,1.5v4.168H5.001c-1.104,0-2,0.896-2,2 s0.896,2,2,2h2.001v29.168c0,1.381,1.119,2.5,2.5,2.5h22.332c1.381,0,2.5-1.119,2.5-2.5V9.668h2.001c1.104,0,2-0.896,2-2 S37.438,5.668,36.335,5.668z M14.168,35.67c0,0.828-0.672,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-21c0-0.828,0.672-1.5,1.5-1.5 s1.5,0.672,1.5,1.5V35.67z M22.168,35.67c0,0.828-0.672,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-21c0-0.828,0.672-1.5,1.5-1.5 s1.5,0.672,1.5,1.5V35.67z M25.168,5.668h-9V3h9V5.668z M30.168,35.67c0,0.828-0.672,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-21 c0-0.828,0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5V35.67z"></path>
                    </g>
                  </g>
                </svg>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </UserLayout>
  );
}
