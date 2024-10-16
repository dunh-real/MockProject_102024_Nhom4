import { ErrorBoundary } from "../../components";
import { MainLayout } from "../../layouts";
import { Training } from "../../pages";
import { RouteObject } from "react-router-dom";

const TrainingRoutes: RouteObject[] = [
  {
    path: "/training",
    element: <MainLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "",
        element: <Training />,
      },
    ],
  },
];
export default TrainingRoutes;
