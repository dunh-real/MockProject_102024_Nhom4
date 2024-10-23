import { RouteObject } from "react-router-dom";
import { ErrorBoundary } from "../../components";
import { MainLayout } from "../../layouts";
import { Staff } from "../../pages";

const StaffManagementRoutes: RouteObject[] = [
  {
    path: "/staffManagement",
    element: <MainLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "",
        element: <Staff />,
      },
    ],
  },
];

export default StaffManagementRoutes;
