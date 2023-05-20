import { UserLayout } from "../styles/styledUser";
import NavAdmin from "../components/NavAdmin";
import { Outlet } from "react-router-dom";

export default function AdminPage() {
  return (
    <UserLayout>
      <NavAdmin />
      <div className="page">
        <h1>Welcome Admin!</h1>
        <p>User information</p>
        <Outlet />
      </div>
    </UserLayout>
  );
}
