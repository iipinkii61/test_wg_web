import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import UserPage from "../pages/UserPage";
import AdminPage from "../pages/AdminPage";
import SetAsDefaultPage from "../components/SetAsDefaultPage";
import ProtectedRoute from "../components/ProtectedRoute";

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
      <ProtectedRoute>
        <UserPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <AdminPage />
      </ProtectedRoute>
    ),
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
