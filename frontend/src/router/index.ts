import { createBrowserRouter } from "react-router-dom";
import AuthRoutes from "./auth";
import HomeRoutes from "./home";
// import ErrorRoutes from "@/router/errors";
import DashboardRoutes from "./dashboard";
import SettingRoutes from "./settings";
import UserRoutes from "./users";
import WorkScheduleRoutes from "./work-schedule";

const router = createBrowserRouter([
    ...AuthRoutes,
    ...HomeRoutes,
    ...DashboardRoutes,
    ...UserRoutes,
    ...SettingRoutes,
    ...WorkScheduleRoutes,
    // ...ErrorRoutes,
]);

export default router;