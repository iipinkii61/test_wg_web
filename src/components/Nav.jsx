import { useState } from "react";
import { NavBar, Toggle } from "../styles/styledUser";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Nav() {
  const { logout } = useAuth();
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const clickSignOut = async () => {
    if (window.confirm("Are you sure to sign out?")) {
      await logout();
    }
  };

  return (
    <div>
      <NavBar>
        <div onClick={() => setIsToggleOpen(!isToggleOpen)}>
          <svg
            fill="#676465"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="40px"
            height="40px"
            viewBox="0 0 311.541 311.541"
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
                <g>
                  <path d="M155.771,26.331C69.74,26.331,0,96.071,0,182.102c0,37.488,13.25,71.883,35.314,98.761 c3.404-27.256,30.627-50.308,68.8-61.225c13.946,12.994,31.96,20.878,51.656,20.878c19.233,0,36.894-7.487,50.698-19.936 c38.503,11.871,65.141,36.27,66.017,64.63c24.284-27.472,39.056-63.555,39.056-103.108 C311.541,96.071,241.801,26.331,155.771,26.331z M155.771,222.069c-9.944,0-19.314-2.732-27.634-7.464 c-20.05-11.409-33.855-34.756-33.855-61.711c0-38.143,27.583-69.176,61.489-69.176c33.909,0,61.489,31.033,61.489,69.176 c0,27.369-14.237,51.004-34.786,62.215C174.379,219.523,165.346,222.069,155.771,222.069z"></path>{" "}
                </g>
              </g>
            </g>
          </svg>
        </div>
        <Link to="/user">
          <svg
            fill="#676465"
            width="30px"
            height="30px"
            viewBox="-4.5 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19.469 12.594l3.625 3.313c0.438 0.406 0.313 0.719-0.281 0.719h-2.719v8.656c0 0.594-0.5 1.125-1.094 1.125h-4.719v-6.063c0-0.594-0.531-1.125-1.125-1.125h-2.969c-0.594 0-1.125 0.531-1.125 1.125v6.063h-4.719c-0.594 0-1.125-0.531-1.125-1.125v-8.656h-2.688c-0.594 0-0.719-0.313-0.281-0.719l10.594-9.625c0.438-0.406 1.188-0.406 1.656 0l2.406 2.156v-1.719c0-0.594 0.531-1.125 1.125-1.125h2.344c0.594 0 1.094 0.531 1.094 1.125v5.875z"></path>
          </svg>
        </Link>
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <path
            fill="#676465"
            fillRule="evenodd"
            d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z"
          />
        </svg>
      </NavBar>
      {isToggleOpen && (
        <Toggle>
          <p>edit profile</p> <hr /> <p onClick={clickSignOut}>sign out</p>
        </Toggle>
      )}
    </div>
  );
}
