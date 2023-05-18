import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function SetAsDefaultPage({ children }) {
  const { authenticatedUser } = useAuth();
  if (authenticatedUser) {
    return authenticatedUser.role == "admin" ? (
      <Navigate to={"/admin"} />
    ) : (
      <Navigate to={"/user"} />
    );
  }
  return children;
}
