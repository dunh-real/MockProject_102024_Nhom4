import { createBrowserRouter } from "react-router-dom";
import AuthRoutes from "./auth";
import HomeRoutes from "./home";
// import ErrorRoutes from "@/router/errors";
import DashboardRoutes from "./dashboard";
import LegalDocumentsRoutes from "./legal-documents";
import SettingRoutes from "./settings";
import UserRoutes from "./users";

const router = createBrowserRouter([
    ...AuthRoutes,
    ...HomeRoutes,
    ...DashboardRoutes,
    ...UserRoutes,
    ...SettingRoutes,
    ...LegalDocumentsRoutes,
    // ...ErrorRoutes,
]);

export default router;