import { ErrorBoundary } from "../../../components";
import { MainLayout } from "../../../layouts";
import { AdminDayOffs } from "../../../pages";
import { RouteObject } from "react-router-dom";

const AdminDayOffRoutes: RouteObject[] = [
  {
    path: "/admin-dayoffs",
    element: <MainLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "",
        element: <AdminDayOffs />,
      },
    ],
  },
];

export default AdminDayOffRoutes;
