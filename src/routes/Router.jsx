import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import UserPage from "../pages/UserPage";
import AdminPage from "../pages/AdminPage";
import SetAsDefaultPage from "../components/SetAsDefaultPage";
import AdminLayout from "../layout/AdminLayout";
import AdminDate from "../pages/AdminDate";
import { ProtectAdmin, ProtectUser } from "../components/ProtectedRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <SetAsDefaultPage>
        <LoginPage />
      </SetAsDefaultPage>
    ),
  },
  {
    path: "/register",
    element: (
      <SetAsDefaultPage>
        <RegisterPage />
      </SetAsDefaultPage>
    ),
  },
  {
    path: "/user",
    element: (
      <ProtectUser>
        <UserPage />
      </ProtectUser>
    ),
  },
  {
    element: (
      <ProtectAdmin>
        <AdminLayout />
      </ProtectAdmin>
    ),
    children: [
      {
        path: "/admin",
        element: <AdminPage />,
      },
      {
        path: "/admin/date",
        element: <AdminDate />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
