import EmployeeContracts from "../../pages/employee-contracts";
import { ErrorBoundary } from "../../components";
import { MainLayout } from "../../layouts";
import { RouteObject } from "react-router-dom";


const EmployeeContractRoutes: RouteObject[] = [
    {
        path: "/employee-contracts",
        element: <MainLayout />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                path: "",
                element: <EmployeeContracts />,
            },
        ],
    },
];

export default EmployeeContractRoutes;