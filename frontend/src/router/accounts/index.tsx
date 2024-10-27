import { RouteObject } from "react-router-dom";
import { ErrorBoundary } from "../../components";
import { MainLayout } from "../../layouts";
import { Accounts, EditAccount, DeleteAccount } from "../../pages";

const AccountsRoutes: RouteObject[] = [
  {
    path: "/accounts",
    element: <MainLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "",
        element: <Accounts />,
      },
      {
        path: "edit/:id",
        element: <EditAccount />,
      },
      {
        path: "delete/:id",
        element: <DeleteAccount />,
      },
    ],
  },
];

export default AccountsRoutes;
