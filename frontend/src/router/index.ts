import { createBrowserRouter } from "react-router-dom";
import AuthRoutes from "./auth";
import HomeRoutes from "./home";
// import ErrorRoutes from "@/router/errors";
import DashboardRoutes from "./dashboard";
import SettingRoutes from "./settings";
import UserRoutes from "./users";
import AdminDayOffRoutes from "./admin/dayOffs";
import DayOffRoutes from "./dayOffs";

const router = createBrowserRouter([
  ...AuthRoutes,
  ...HomeRoutes,
  ...DashboardRoutes,
  ...UserRoutes,
  ...SettingRoutes,
  ...AdminDayOffRoutes,
  ...DayOffRoutes,
  // ...ErrorRoutes,
]);

export default router;
