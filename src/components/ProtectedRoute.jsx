import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export const ProtectUser = ({ children }) => {
  const { authenticatedUser } = useAuth();
  if (!authenticatedUser) {
    return <Navigate to={"/"} />;
  } else if (authenticatedUser.role === "admin") {
    return <Navigate to={"/admin"} />;
    // ป้องกันฝั่ง admin จะมา path "/user" ไม่ได้
  }
  return children;
};

export const ProtectAdmin = ({ children }) => {
  const { authenticatedUser } = useAuth();
  if (!authenticatedUser) {
    return <Navigate to={"/"} />;
  } else if (authenticatedUser.role === "user") {
    return <Navigate to={"/user"} />;
  }
  return children;
};
