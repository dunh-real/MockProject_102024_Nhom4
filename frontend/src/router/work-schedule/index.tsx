import { ErrorBoundary } from "../../components";
import { MainLayout } from "../../layouts";
import { WorkSchedule } from "../../pages";
import { RouteObject } from "react-router-dom";

const WorkScheduleRoutes: RouteObject[] = [
    {
        path: "/work-schedule",
        element: <MainLayout />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                path: "",
                element: <WorkSchedule />
            },
        ],
    },
];

export default WorkScheduleRoutes;