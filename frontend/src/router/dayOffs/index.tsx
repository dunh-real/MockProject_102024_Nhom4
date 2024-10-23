import { ErrorBoundary } from "../../components";
import { MainLayout } from "../../layouts";
import { DayOffs } from "../../pages";
import { RouteObject } from "react-router-dom";

const DayOffRoutes: RouteObject[] = [
  {
    path: "/dayoffs",
    element: <MainLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "",
        element: <DayOffs />,
      },
    ],
  },
];

export default DayOffRoutes;
