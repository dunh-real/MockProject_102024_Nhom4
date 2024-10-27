import { createBrowserRouter } from "react-router-dom";
// import AuthRoutes from "./auth";
import HomeRoutes from "./home";
// import ErrorRoutes from "@/router/errors";
import DashboardRoutes from "./dashboard";
import SettingRoutes from "./settings";
import UserRoutes from "./users";
import AccountRoutes from "./accounts";

const router = createBrowserRouter([
  // ...AuthRoutes,
  ...HomeRoutes,
  ...DashboardRoutes,
  ...AccountRoutes,
  ...UserRoutes,
  ...SettingRoutes,
  // ...ErrorRoutes,
]);

export default router;
