import { useEffect, useState } from "react";
import SidebarUser from "../components/SidebarUser";
import UserInfo from "../components/UserInfo";
import { AddButton, Table, UserLayout } from "../styles/styledUser";
import Nav from "../components/Nav";
// import useAuth from "../hooks/useAuth";
import * as dataApi from "../apis/user-api";
import ForUpdate from "../components/ForUpdate";
import { useNavigate } from "react-router-dom";

export default function UserPage() {
  const [isOpen, setIsOpen] = useState(false);
  // const {
  //   authenticatedUser: { firstName, lastName, phone, idCard },
  // } = useAuth();
  const [myData, setMyData] = useState(null);
  const [update, setUpdate] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const res = await dataApi.getData();
      setMyData(res.data);
    };
    fetchData();
  }, []);

  const handleDelete = async (dataId) => {
    if (window.confirm("Are you sure to delete this?")) {
      await dataApi.deleteData(dataId);
      navigate("/user");
      const newArrData = myData.WeightHeights.filter((el) => el.id !== dataId);
      myData.WeightHeights = newArrData;
      setMyData(myData);
    }
  };

  return (
    <UserLayout>
      <Nav />
      <div className="page">
        <h1>Welcome {myData?.firstName}!</h1>
        <UserInfo
          firstName={myData?.firstName}
          lastName={myData?.lastName}
          phone={myData?.phone}
          idCard={myData?.idCard}
        />
        <div className="simple">
          <AddButton onClick={() => setIsOpen(!isOpen)}>+ Add data</AddButton>
        </div>
        <Table>
          <tbody>
            <tr>
              <th>Weight</th>
              <th>Height</th>
              <th>Date</th>
              <th></th>
            </tr>
            {myData?.WeightHeights?.map((el) => (
              <tr key={el.id}>
                <td>{el.weight}</td>
                <td>{el.height}</td>
                <td>{el.date}</td>
                <td className="icon">
                  <div onClick={() => setUpdate(el)}>
                    <svg
                      viewBox="0 0 24 24"
                      width="1.25em"
                      height="1.25em"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <g id="Complete">
                          <g id="edit">
                            <g>
                              <path
                                d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8"
                                fill="none"
                                stroke="#000000"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                              ></path>
                              <polygon
                                fill="none"
                                points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8"
                                stroke="#000000"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                              ></polygon>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div onClick={() => handleDelete(el.id)}>
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
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {isOpen && (
          <SidebarUser
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            myData={myData}
            setMyData={setMyData}
          />
        )}
        {update && (
          <ForUpdate
            update={update}
            setUpdate={setUpdate}
            myData={myData}
            setMyData={setMyData}
          />
        )}
      </div>
    </UserLayout>
  );
}
