import { createBrowserRouter } from "react-router-dom";
import AuthRoutes from "./auth";
import HomeRoutes from "./home";
import LandingRoutes from "./landing";
// import ErrorRoutes from "@/router/errors";
import DashboardRoutes from "./dashboard";
import LegalDocumentsRoutes from "./legal-documents";
import SettingRoutes from "./settings";
import UserRoutes from "./users";
import EmployeeContractRoutes from "./employee-contracts";

const router = createBrowserRouter([
    ...LandingRoutes,
    ...AuthRoutes,
    ...HomeRoutes,
    ...DashboardRoutes,
    ...UserRoutes,
    ...SettingRoutes,
    ...LegalDocumentsRoutes,
    ...EmployeeContractRoutes,
    // ...ErrorRoutes,
]);

export default router;