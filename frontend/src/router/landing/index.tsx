import { ErrorBoundary } from "../../components";
import { LandingLayout } from "../../layouts";
import { Landing } from "../../pages";
import { RouteObject } from "react-router-dom";

const LandingRoutes: RouteObject[] = [
    {
        path: "/landing",
        element: <LandingLayout />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                path: "",
                element: <Landing />,
            },
        ],
    },
];

export default LandingRoutes;