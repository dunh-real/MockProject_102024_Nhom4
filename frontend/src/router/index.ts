import { createBrowserRouter } from "react-router-dom";
import AuthRoutes from "./auth";
import HomeRoutes from "./home";
// import ErrorRoutes from "@/router/errors";
import DashboardRoutes from "./dashboard";
import SettingRoutes from "./settings";
import UserRoutes from "./users";
import RequestRouter from "./request";
import RequestDetailRouter from "./requestdetail";
import ProfileRouter from "./profile";

const router = createBrowserRouter([
    ...AuthRoutes,
    ...HomeRoutes,
    ...DashboardRoutes,
    ...UserRoutes,
    ...SettingRoutes,
    ...RequestRouter,
    ...RequestDetailRouter,
    ...ProfileRouter

    // ...ErrorRoutes,
]);

export default router;