import { createBrowserRouter } from "react-router-dom";
import AuthRoutes from "./auth";
import HomeRoutes from "./home";
import LandingRoutes from "./landing";
// import ErrorRoutes from "@/router/errors";
import DashboardRoutes from "./dashboard";
import SettingRoutes from "./settings";
import UserRoutes from "./users";

const router = createBrowserRouter([
    ...LandingRoutes,
    ...AuthRoutes,
    ...HomeRoutes,
    ...DashboardRoutes,
    ...UserRoutes,
    ...SettingRoutes,
    // ...ErrorRoutes,
]);

export default router;