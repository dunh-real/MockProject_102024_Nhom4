import { createBrowserRouter } from "react-router-dom";
import AuthRoutes from "./auth";
import HomeRoutes from "./home";
// import ErrorRoutes from "@/router/errors";
import DashboardRoutes from "./dashboard";
import SettingRoutes from "./settings";
import UserRoutes from "./users";
import StaffManagementRoutes from "./staffs";

const router = createBrowserRouter([
  ...AuthRoutes,
  ...HomeRoutes,
  ...DashboardRoutes,
  ...StaffManagementRoutes,
  ...UserRoutes,
  ...SettingRoutes,
  // ...ErrorRoutes,
]);

export default router;
